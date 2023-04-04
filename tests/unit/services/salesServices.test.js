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

    sinon.stub(salesModels, "getSaleById").resolves();
    sinon.stub(salesModels, "saleExists").resolves();
    const result = await salesServices.getSaleById(999);
    expect(result).to.be.deep.equal(mock);

    sinon.restore()

  });
});
