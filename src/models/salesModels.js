const connection = require('../database/connection');

const getAllSales = async () => {
  const newQuery = 'SELECT * FROM StoreManager.sales';
  const allSales = connection.execute(newQuery);
  return allSales;
};

const getSaleById = async (id) => {
  const newQuery = 'SELECT * FROM StoreManager.sales WHERE id=?';
  const [[saleById]] = await connection.execute(newQuery, [id]);
  return saleById;
};

const createNewSaleDate = async () => {
  const querySaleDate = 'INSERT INTO StoreManager.sales (date) VALUES(NOW())';
  const saleDate = await connection.execute(querySaleDate);
  return saleDate;
};

const createNewSaleProduct = async (saleId, saleDetails) => {
  const querySaleProduct = `INSERT INTO StoreManager.sales_products
  (sale_id, product_id, quantity) VALUES (?, ?, ?)`;
  const [saleProduct] = await connection
    .execute(querySaleProduct, [saleId, saleDetails.productId, saleDetails.quantity]);
  return saleProduct;
};

module.exports = {
  getAllSales,
  getSaleById,
  createNewSaleDate,
  createNewSaleProduct,
};
