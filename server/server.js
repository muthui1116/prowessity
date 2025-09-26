import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import session from 'express-session';

import courseRoutes from './routes/authRoutes.js'
import productRoutes from './routes/productRoutes.js'
import path from "path";

import { sql } from './config/db.js';
import { aj } from './lib/arcjet.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

app.use(express.json());
app.use(cors());
app.use(helmet({
  contentSecurityPolicy: false,
})); // security middleware protects your app by setting various HTTPS headers
app.use(morgan("dev")); // log the requests

// apply arcjet rate-limit to all routes 
app.use(async (req, res, next) => {
  try {
    const decision = await aj.protect(req, {
      requested: 1, // specifies that each request consumes 1 token
    });

    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        res.status(429).json({ error: "Too Many Requests" });
      } else if (decision.reason.isBot()) {
        res.status(403).json({ error: "Bot access denied" });
      } else {
        res.status(403).json({ error: "Forbidden" });
      }
      return;
    }

    // check for spoofed bots
    if (decision.results.some(result => result.reason.isBot() && result.reason.isSpoofed())) {
      res.status(403).json({ error: "Spoofed bot detected" });
      return;
    }

    next();
  } catch (error) {
    console.log("Arcjet error", error);
    next(error);
  }
});

app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // set true if using HTTPS
}));

app.use('/api/products', productRoutes);
app.use('/api/courses', courseRoutes);

if (process.env.NODE_ENV === "production") {
  //server our react app
  app.use(express.static(path.join(__dirname, "/client/dist")))

  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"))
  })
}

async function initDB() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )`;
    console.log("Database initialized successfully");
  } catch (error) {
    console.log("Error initDB", error);
  }

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        price DECIMAL(10, 2) NOT NULL,
        learner VARCHAR(255) NOT NULL,
        instructor VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )`;
    console.log("Database initialized successfully");
  } catch (error) {
    console.log("Error initDB", error);
  }

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS controller(
        users_id INTEGER REFERENCES users(id),
        products_id INTEGER REFERENCES products(id),
        PRIMARY KEY (users_id, products_id)
    )`;
    console.log("Database initialized successfully");
  } catch (error) {
    console.log("Error initDB", error);
  }
}


initDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
  });
});
