const { stub } = require('sinon');
const { expect, assert } = require('chai');
const { find, findById, create, update, _delete } = require('../domains/developers/developers.service');
const { Developers } = require('../_helpers/db');

// const { getAllCustomers } = require('../domains/customer/customer');

describe('Test Developers', () => {
  describe('', () => {

    it('Deve buscar todos os desenvolvedores e retornar um array', async () => {

      findMock = stub(Developers, 'find').returns([])
      const result = await find({});

      expect(result).to.be.a("array");
      expect(findMock.calledWith({})).to.equal(true);

      findMock.restore()
    });

    it('Deve buscar 1 desenvolvedor pelo id e retornar um objeto', async () => {

      const findByIdMock = stub(Developers, 'findById').returns({});
      const id = 1;
      const result = await findById(id);

      expect(result).to.be.a("object");
      expect(findByIdMock.calledWith(id)).to.equal(true);

      findByIdMock.restore()
    });

 
    it('Deve buscar todos os desenvolvedores com idade 20 e retornar um array', async () => {

      const findMock = stub(Developers, 'find').returns([]);
      const query = { idade: 20 }
      const result = await find(query);

      expect(result).to.be.a("array");
      expect(findMock.calledWith(query)).to.equal(true);

      findMock.restore()
    });

    it('Deve inserir um novo desenvolvedor e retornar ele mesmo', async () => {

      const newDev = {
            nome: 'William Manesco',
            sexo: 'M',
            idade: 23,
            hobby: "Programar",
            datanascimento: Date.parse("07/04/1997"),
          }

      const saveMock = stub(Developers.prototype, 'save').returns(newDev);
      const result = await create(newDev);

      expect(result).to.deep.equal(newDev);

      saveMock.restore()
    });

    it('Deve alterar um desenvolvedor e retornar ele mesmo', async () => {

      const updatedDev = {
            nome: 'William Manesco',
            sexo: 'M',
            idade: 23,
            hobby: "Programar",
            datanascimento: Date.parse("07/04/1997"),
          }

      const findByIdMock = stub(Developers, 'findById').returns(new Developers(updatedDev));      
      const saveMock = stub(Developers.prototype, 'save').returns(updatedDev);
      const result = await update(1, updatedDev);

      expect(result).to.deep.equal(updatedDev);
      expect(findByIdMock.calledWith(1)).to.equal(true);

      saveMock.restore()
      findByIdMock.restore()
    });

    it('Deve retornar desenvolvedor nao encontrado ', async () => {

      const updatedDev = {
            nome: 'William Manesco',
            sexo: 'M',
            idade: 23,
            hobby: "Programar",
            datanascimento: Date.parse("07/04/1997"),
          }

      const findByIdMock = stub(Developers, 'findById').returns(null);      
      const saveMock = stub(Developers.prototype, 'save').returns(updatedDev);
      
      update(1, updatedDev).catch(r => {
        assert.equal(r, "Desenvolvedor nao encontrado")
      })

      saveMock.restore()
      findByIdMock.restore()
    });

    it('Deve remover um desenvolvedor pelo id e retornar um objeto', async () => {

      const updatedDev = {
            nome: 'William Manesco',
            sexo: 'M',
            idade: 23,
            hobby: "Programar",
            datanascimento: Date.parse("07/04/1997"),
          }

      const findByIdAndRemoveMock = stub(Developers, 'findByIdAndRemove');      
      const result = await _delete(1); 
     
      expect(result, {})
      expect(findByIdAndRemoveMock.calledWith(1)).to.equal(true);

      findByIdAndRemoveMock.restore()
    });
    // it("Deve retornar um desenvolvedor", async () => {
    //   const result = await findById(3)
    // });

  });
});