import { sql } from '../config/db.js';

export const postLogin = async (req, res) => {
  const { email, password } = req.body;
  const [user] = await sql`SELECT id, name, email, password FROM users WHERE email = ${email} LIMIT 1`;
  if (!user || user.password !== password) return res.status(401).json({ error: 'Invalid credentials' });
  req.session.userId = user.id;
  res.json({ user: { id: user.id, name: user.name, email: user.email } });
};

export const postRegister = async (req, res) => {
  const { name, email, password } = req.body;
  const [existing] = await sql`SELECT id FROM users WHERE email = ${email} LIMIT 1`;
  if (existing) return res.status(409).json({ error: "Email already registered" });
  const [inserted] = await sql`
    INSERT INTO users (name, email, password)
    VALUES (${name}, ${email}, ${password})
    RETURNING id, name, email
  `;
  req.session.userId = inserted.id;
  res.status(201).json({ user: inserted });
};

export const getCurrentUser = async (req, res) => {
  if (!req.session.userId) return res.status(401).json({ error: "Not logged in" });
  const [user] = await sql`SELECT id, name, email FROM users WHERE id = ${req.session.userId}`;
  res.json({ user });
};

export const postLogout = (req, res) => {
  req.session.destroy(() => res.json({ message: "Logged out" }));
};