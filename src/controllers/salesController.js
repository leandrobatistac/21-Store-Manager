const salesServices = require('../services/salesServices');

const getAllSales = async (req, res, next) => {
  try { 
  const [allSales] = await salesServices.getAllSales();
  res.status(200).json(allSales);
  } catch (e) {
    next(e);
  }
};

const getSaleById = async (req, res) => {
  try { 
  const { id } = req.params;
  const saleById = await salesServices.getSaleById(id);
  
  if (!saleById) {
    return res.status(404).json({ message: 'Sale not found' });
  }

  res.status(200).json(saleById);
  } catch (e) {
    return res.status(404).json({ message: 'Sale not found' });
  }
};

const createNewSale = async (req, res) => {  
  try {
    const saleDetails = req.body;
    const newSale = await salesServices.createNewSale(saleDetails);
    res.status(201).json(newSale);
  } catch (error) {
    return res.status(404).json({ message: 'Product not found' });
  }
};

module.exports = {
  getAllSales,
  getSaleById,
  createNewSale,
};
