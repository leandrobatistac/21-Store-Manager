const connection = require('../database/connection');

const getProducts = async () => {
  const newQuery = 'SELECT * FROM StoreManager.products';
  const allProducts = connection.execute(newQuery);
  return allProducts;
};

const getProductsById = async (id) => {
  const newQuery = 'SELECT * FROM StoreManager.products WHERE id=?';
  const [[productById]] = await connection.execute(newQuery, [id]);
  return productById;
};

const createNewProduct = async (name) => {
  const newQuery = 'INSERT INTO StoreManager.products (name) VALUES (?)';
  const newProduct = await connection.execute(newQuery, [name]);
  return newProduct;
};

const editProduct = async (id, name) => {
  const newQuery = 'UPDATE StoreManager.products SET name=? WHERE id=?';
  const newProduct = await connection.execute(newQuery, [name, id]);
  return newProduct;
};

const deleteProduct = async (id) => {
  const newQuery = 'DELETE FROM products WHERE id=?';
  const newProduct = await connection.execute(newQuery, [id]);
  return newProduct;
};

module.exports = {
  getProducts,
  getProductsById,
  createNewProduct,
  editProduct,
  deleteProduct,
};
