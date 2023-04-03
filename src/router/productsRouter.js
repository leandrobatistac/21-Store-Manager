const { Router } = require('express');
const productsController = require('../controllers/productsController');
const productsValidator = require('../middlewares/productsValidator');

const productsRouter = Router();

productsRouter.get('/', productsController.getProducts);
productsRouter.get('/:id', productsController.getProductsById);
productsRouter.post('/', productsValidator.validateProduct, productsController.createNewProduct);

module.exports = productsRouter;