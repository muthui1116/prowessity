import { sql } from "../config/db.js";

const SAMPLE_PRODUCTS = [
  {
    name: "Web Development",
    price: 900,
    learner: "web-dev",
    instructor: "web-de",
    image:
      "https://media.istockphoto.com/id/2206652863/photo/blue-global-technology-concept.jpg?s=612x612&w=0&k=20&c=pX6Nc80VjSVfIvcPWzS2kPoA92AC0GYOpBvst3x3iBs=",
  },
  {
    name: "Data Analysis",
    price: 250,
    learner: "web-dev",
    instructor: "web-de",
    image:
      "https://plus.unsplash.com/premium_photo-1661384232357-3378425af882?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkxfHxkYXRhJTIwYW5hbHlzaXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Mobile App Development",
    price: 900,
    learner: "web-dev",
    instructor: "web-de",
    image:
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9iaWxlJTIwYXBwJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
  },
];

async function seedDatabase() {
  try {
    // first, clear existing data
    await sql`TRUNCATE TABLE products RESTART IDENTITY`;

    // insert all products
    for (const product of SAMPLE_PRODUCTS) {
      await sql`
        INSERT INTO products (name, price, image, learner, instructor)
        VALUES (${product.name}, ${product.price}, ${product.image}, ${product.learner}, ${product.instructor})
      `;
    }

    console.log("Database seeded successfully");
    process.exit(0); // success code
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1); // failure code
  }
}

seedDatabase();