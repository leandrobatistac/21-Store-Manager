const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const productsModels = require('../../../src/models/productsModels');
const connection = require('../../../src/database/connection');

describe('Testa a camada Models de Products', function () {
  it('Testa a criação de um novo produto', async function () {
    const mock = [{ affectedRows: 1, changedRows: 1 }, undefined];

    sinon.stub(connection, 'execute').resolves(mock);

    const [result] = await productsModels.createNewProduct('Violão de Madeira');

    expect(result.affectedRows).to.be.equal(1);
    expect(result.changedRows).to.be.equal(1);
    
    sinon.restore()
  })
  
  it('Testa o GET de todos os produtos', async function () {
    const mock = [
      [
        {
          id: 1,
          name: "Martelo de Thor",
        },
        {
          id: 2,
          name: "Traje de encolhimento",
        },
        {
          id: 3,
          name: "Escudo do Capitão América",
        },
      ],
    ];

    sinon.stub(connection, 'execute').resolves(mock);
    const result = await productsModels.getProducts();
    expect(result).to.be.equal(mock);

    sinon.restore()
  })

  it('Testa o GET de um produto específico', async function () {
    const mock = {
      id: 1,
      name: "Martelo de Thor",
    };

    sinon.stub(connection, 'execute').resolves([[mock]]);
    const result = await productsModels.getProductsById(1);
    expect(result).to.be.equal(mock);

    sinon.restore()
  })
});
