const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const salesServices = require('../../../src/services/salesServices');
const salesModels = require('../../../src/models/salesModels');

describe('Testa a camada Services de Sales', function () {
  it('Testa o GET de um ID inválido', async () => {
    const mock = {
      "message": "Sale not found"
    };

    sinon.stub(salesModels, "getSaleById").resolves(mock);
    sinon.stub(salesModels, "saleExists").resolves(mock);
    const result = await salesServices.getSaleById(999);
    expect(result).to.be.deep.equal(mock);

    sinon.restore()

  });

  it('Testa o GET de todos os produtos', async function () {
    const mock = [
      {
        "saleId": 1,
        "date": "2023-04-04T02:17:35.000Z",
        "productId": 1,
        "quantity": 5
      },
      {
        "saleId": 1,
        "date": "2023-04-04T02:17:35.000Z",
        "productId": 2,
        "quantity": 10
      },
      {
        "saleId": 2,
        "date": "2023-04-04T02:17:35.000Z",
        "productId": 3,
        "quantity": 15
      }
    ];

    sinon.stub(salesModels, "getAllSales").resolves(mock);
    const result = await salesServices.getAllSales();
    expect(result).to.be.equal(mock);

    sinon.restore()
  })
});
