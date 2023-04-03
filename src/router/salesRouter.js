const { Router } = require('express');
const salesController = require('../controllers/salesController');
const salesValidate = require('../middlewares/salesValidator');

const salesRouter = Router();

salesRouter.get('/', salesController.getAllSales);
salesRouter.get('/:id', salesController.getSaleById);
salesRouter.post('/', salesValidate.bodyValidator, salesController.createNewSale);

module.exports = salesRouter;