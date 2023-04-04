const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai')

chai.use(sinonChai)

const { expect } = require('chai');

const salesServices = require('../../../src/services/salesServices');
const salesController = require('../../../src/controllers/salesController');
const connection = require('../../../src/database/connection');

describe('Testa a camada Controller de sales', function () {
  it('Testa o retorno de GetByID válido', async function () {
    const mockById = [
      {
        "date": "2023-04-04T01:10:08.000Z",
        "productId": 3,
        "quantity": 15
      }
    ];

    const req = {
      params: { id: 2 },
    };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesServices, 'getSaleById')
      .resolves(mockById);

    const result = await salesController.getSaleById(req, res)

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockById);

    sinon.restore()
  })
});
