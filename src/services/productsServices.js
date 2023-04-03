const productsModel = require('../models/productsModels');

const getProducts = async () => {
  const allProducts = await productsModel.getProducts();
  return allProducts;
};

const getProductsById = async (id) => {
  const productById = await productsModel.getProductsById(id);
  return productById;
};

const createNewProduct = async (name) => {
  const [newProduct] = await productsModel.createNewProduct(name);

  const objectProduct = {
    id: newProduct.insertId,
    name,
  };
  
  return objectProduct;
};

module.exports = {
  getProducts,
  getProductsById,
  createNewProduct,
};
