const db = require("../config/database");

// ==> Método para crear 'Product':

exports.createProduct = async (req, res) => {
  const { product_name, quantity, price, image} = req.body;
  const { rows } = await db.query(
    "INSERT INTO products (product_name, quantity, price, image) VALUES ($1, $2, $3, $4)",
    [product_name, quantity, price, image]
  );

  res.status(201).send({
    message: "Product added successfully!",
    body: {
      product: { product_name, quantity, price, image }
    },
  });
};

// => Método Para listar Products
exports.listAllProducts = async (req, res) => {
  const response = await db.query('SELECT * FROM products ORDER BY product_name ASC');
  res.status(200).send(response.rows);
};