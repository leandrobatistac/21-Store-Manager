const { Router } = require('express');
const productsController = require('../controllers/productsController');

const productsRouter = Router();

productsRouter.get('/', productsController.getProducts);
productsRouter.get('/:id', productsController.getProductsById);
productsRouter.post('/', productsController.createNewProduct);

module.exports = productsRouter;