const { stub } = require('sinon');
const { expect, assert } = require('chai');
const { find, findById, create, update, _delete } = require('../domains/developers/developers.controller');
const DevelopersService = require('../domains/developers/developers.service');

describe('Test Developers Controller', () => {

  it('Deve chamar service.find e retornar um array', async () => {

    findMock = stub(DevelopersService, 'find').returns([])
    const req = { query : {} }
    const result = await find(req);

    expect(result).to.be.a("array");
    expect(findMock.calledWith(req.query)).to.equal(true);

    findMock.restore()
  });

  it('Deve chamar service.findById e retornar um objeto', async () => {

    findByIdMock = stub(DevelopersService, 'findById').returns(null)
    
    var req = { 
      params : {
        id: 1
      }
    }
    const result = await findById(req);

    expect(result).to.be.a("object");
    expect(findByIdMock.calledWith(req.params.id)).to.equal(true);

    findByIdMock.restore()
  });

  it('Deve chamar service.create e retornar um objeto com id', async () => {

    createMock = stub(DevelopersService, 'create').returns({_id: "123"})
    
    var req = { 
      body: {
        nome: 'William Manesco',
        sexo: 'M',
        idade: 23,
        hobby: "Programar",
        datanascimento: Date.parse("07/04/1997"),
      }
    }
    const result = await create(req);

    expect(result).to.deep.equal({id: "123"});
    expect(createMock.calledWith(req.body)).to.equal(true);

    createMock.restore()
  });

  it('Deve chamar service.update e retornar um objeto alterado', async () => {

    var updatedDev = {
      nome: 'William Manesco',
      sexo: 'M',
      idade: 23,
      hobby: "Programar",
      datanascimento: Date.parse("07/04/1997"),
    }

    updateMock = stub(DevelopersService, 'update').returns(updatedDev)
    
    var req = { 
      body: updatedDev,
      params: {
        id: "123"
      },
    }
    const result = await update(req);

    expect(result).to.deep.equal(updatedDev);
    expect(updateMock.calledWith(req.params.id, req.body)).to.equal(true);

    updateMock.restore()
  });

  it('Deve chamar service.delete e retornar um objeto', async () => {

    deleteMock = stub(DevelopersService, '_delete').returns({})
    
    var req = { 
      params: {
        id: "123"
      },
    }
    const result = await _delete(req);

    expect(result).to.deep.equal({});
    expect(deleteMock.calledWith(req.params.id)).to.equal(true);

    deleteMock.restore()
  });
});
