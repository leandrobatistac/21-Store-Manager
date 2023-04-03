const salesModel = require('../models/salesModels');
const productsModel = require('../models/productsModels');

const getAllSales = async () => {
  const allSales = await salesModel.getAllSales();
  return allSales;
};

const getSaleById = async (id) => {
  const saleById = await salesModel.getSaleById(id);

  const saleExist = await salesModel.saleExists(id);
  if (!saleExist) {
    throw new Error(400, 'ID not found');
  }
  return saleById;
};

const createNewSale = async (saleDetails) => {
  const productId = await Promise.all(saleDetails
    .map((product) => productsModel.getProductsById(product.productId)));
  const invalidProduct = productId.some((product) => product === undefined);

  if (invalidProduct) {
    throw new Error(404, 'Product not found');
  }

  const saleDate = await salesModel.createNewSaleDate();  
  const saleId = saleDate[0].insertId;
  
  const saleProductsComplete = saleDetails
  .map((e) => salesModel.createNewSaleProduct(saleId, e));
  
  await Promise.all(saleProductsComplete);
  
    const objectSale = { id: saleId, itemsSold: saleDetails };
    return objectSale;
};

module.exports = {
  getAllSales,
  getSaleById,
  createNewSale,
};
