const connection = require('./connection');

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

module.exports = {
  getProducts,
  getProductsById,
};
