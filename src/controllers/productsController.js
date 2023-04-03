const productsServices = require('../services/productsServices');

const getProducts = async (req, res, next) => {
  try { 
  const [allProducts] = await productsServices.getProducts();
  res.status(200).json(allProducts);
  } catch (e) {
    next(e);
  }
};

const getProductsById = async (req, res, next) => {
  try { 
  const { id } = req.params;
  const productById = await productsServices.getProductsById(id);
  
  if (!productById) {
    return res.status(404).json({ message: 'Product not found' });
  }
    
  res.status(200).json(productById);
  } catch (e) {
    next(e);
  }
};

const createNewProduct = async (req, res) => {  
  const { name } = req.body;
  const newProduct = await productsServices.createNewProduct(name);
  res.status(201).json(newProduct);
};

const editProduct = async (req, res, next) => {
  try { 
    const { id } = req.params;
    const { name } = req.body;

  const productById = await productsServices.getProductsById(id);
  
  if (!productById) {
    return res.status(404).json({ message: 'Product not found' });
  }

  const productEdited = await productsServices.editProduct(id, name);
  res.status(200).json(productEdited);
  } catch (e) {
    next(e);
  }
};

const deleteProduct = async (req, res, next) => {
  try { 
    const { id } = req.params;

  const productById = await productsServices.getProductsById(id);
  
  if (!productById) {
    return res.status(404).json({ message: 'Product not found' });
  }

  await productsServices.deleteProduct(id);
  res.status(204).end();
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getProducts,
  getProductsById,
  createNewProduct,
  editProduct,
  deleteProduct,
};
