import { sql } from "../config/db.js";

// Register route
export const createProduct = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  // Basic validation
  if (!name || !email || !password || password.length < 6 || password !== confirmPassword) {
    return res.status(400).json({ error: "Invalid registration data." });
  }

  try {
    // Check if email exists
    const userExists = await sql `SELECT id FROM users WHERE email = $1, [email]`;
    if (userExists.rows.length > 0) {
      return res.status(409).json({ error: "Email already registered." });
    }
    // Insert user
    await sql `
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
      [name, email, password] // Note: Hash password in production!
    `;
    res.status(201).json({ message: "User registered successfully." });
  } catch (err) {
    res.status(500).json({ error: "Server error." });
  }
};

// Login route (for completeness)
export const getProduct = async (req, res) => {
  const { email, password } = req.body;
  console.log("Login request:", email, password);

  if (!email || !password) return res.status(400).json({ error: "Missing credentials." });

  try {
    const userRes = await sql `SELECT id, name, email, password FROM users WHERE email = $1, [email]`;
    const user = userRes.rows[0];
    console.log("DB User:", user);

    if (!user || user.password !== password) {
      return res.status(401).json({ error: "Invalid credentials." });
    }
    res.status(200).json({ message: "Login successful.", user: { id: user.id, name: user.name, email: user.email } });
  } catch (err) {
    res.status(500).json({ error: "Server error." });
  }
};


export const getProducts = async (req, res) => {
    try {
        const products = await sql`
            SELECT * FROM products
            `;
        console.log("Fetced Products", products)
        res.status(200).json({ success: true, data: products })
    } catch (error) {
        console.log("Error in get getProducts function", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

// export const createProduct = async (req, res) => {
//     const { name, price, image, learner } = req.body

//     if (!name || !price || !image || !learner || !instructor) {
//         return res.status(400).json({ success: false, message: "All fields are required" })
//     }

//     try {
//         const newProduct = await sql`
//             INSERT INTO products (name, price, image, learner, instructor)
//             VALUES (${name}, ${price}, ${image}, ${learner}, ${instructor})
//             RETURNING *
//         `;
//         console.log("new product added:", newProduct);
//         res.status(201).json({ success: true, data: newProduct[0] });
//     } catch (error) {
//         console.log("Error in createProduct function", error);
//         res.status(500).json({ success: false, message: "Internal Server Error" });
//     }

// }

// export const getProduct = async (req, res) => {

//     const { id } = req.params

//     try {
//         const product = await sql`
//             SELECT * FROM products WHERE id=${id}
//         `
//         res.status(200).json({ success: true, data: product[0] });

//     } catch (error) {
//         console.log("Error in getProduct function", error);
//         res.status(500).json({ success: false, message: "Internal Server Error" });
//     }
// }

export const updateProduct = async (req, res) => {
    const { id } = req.params
    const { name, price, image, link } = req.body

    try {
        const updateProduct = await sql`
            UPDATE products
            SET name=${name}, price=${price}, image=${image}, learner=${learner}, instructor=${instructor}
            WHERE id=${id}
            RETURNING *
        `;

        if (updateProduct.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        res.status(200).json({ success: true, data: updateProduct[0] });
    } catch (error) {
        console.log("Error in updateProduct function", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params

    try {
        const deletedProduct = await sql`
            DELETE FROM products WHERE id=${id} RETURNING *
        `;

        if (deletedProduct.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        res.status(200).json({ success: true, data: deletedProduct[0] });
    } catch (error) {
        console.log("Error in deleteProduct function", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}   