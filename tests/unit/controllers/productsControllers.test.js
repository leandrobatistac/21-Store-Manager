const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai')

chai.use(sinonChai)

const { expect } = require('chai');

const productsServices = require('../../../src/services/productsServices');
const productsController = require('../../../src/controllers/productsController');
const connection = require('../../../src/database/connection');

describe('Testa a camada Controller de Products - GET All', function () {

  const allProducts = [
    {
      id: 1,
      name: "Martelo de Thor"
    },
    {
      id: 2,
      name: "Traje de encolhimento"
    },
    {
      id: 3,
      name: "Escudo do Capitão América"
    }
  ];

  it('Testa o status 200', async function () {
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsServices, 'getProducts')
      .resolves(allProducts);

    await productsController.getProducts(req, res)

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allProducts[0]);

    sinon.restore()
  })

  it('Testa o retorno de GetByID válido', async function () {
    const mockById = {
      id: 1,
      name: "Martelo de Thor"
    };

    const req = {
      params: { id: 1 },
    };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsServices, 'getProductsById')
      .resolves(mockById);

    const result = await productsController.getProductsById(req, res)

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockById);

    sinon.restore()
  })
});
