const developerService = require('./developers.service')

async function find(req) {
    return await developerService.find(req.query)
}

async function findById(req) {
    const developer = await developerService.findById(req.params.id)
    return developer || {}
}

async function create(req) {
    const newDev = await developerService.create(req.body);

    return {id: newDev._id}
}

async function update(req) {
    const updatedDev = await developerService.update(req.params.id, req.body);

    return updatedDev;
}

async function _delete(req) {
    await Developers.delete(req.params.id);
    return {}
}

module.exports = {find, findById, create, update, _delete}