const productsModel = require('../models/productsModels');

const getProducts = async () => {
  const allProducts = await productsModel.getProducts();
  return allProducts;
};

const getProductsById = async (id) => {
  const productById = await productsModel.getProductsById(id);
  return productById;
};

module.exports = {
  getProducts,
  getProductsById,
};
