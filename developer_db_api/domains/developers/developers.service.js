const {Developers} = require('../../_helpers/db')

async function find(query) {

    let developers;
    const {limit, page} = query; //paginacao
    
    delete query.limit;
    delete query.page;

    if (limit && page) {
        developers = await Developers.find(query).limit(parseInt(limit)).skip(parseInt(limit) * parseInt(page))
    } else {
        developers = await Developers.find(query)
    }

    return developers;
}

async function findById(id) {
    return await Developers.findById(id)
}

async function create(body) {
    const developer = new Developers(body);

    return await developer.save();
}

async function update(id, body) {
    const developer = await Developers.findById(id);

    // validacao
    if (!developer) throw 'Desenvolvedor nao encontrado';

    //atribui body ao objeto.
    Object.assign(developer, body);

    return await developer.save();
}

async function _delete(id) {
    await Developers.findByIdAndRemove(id); 
}


module.exports = {find, findById, create, update, _delete}