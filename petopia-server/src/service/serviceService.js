// serviceService.js
const serviceModel = require('./serviceModel');

const getAllservices = () => {
    return serviceModel.findAll();
};

const getservice = (id) => {
    return serviceModel.findById(id);
};

const addservice = (service) => {
    return serviceModel.create(service);
};

const updateservice = (id, service) => {
    return serviceModel.update(id, service);
};

// Delete service
const deleteservice = (id) => {
    return serviceModel.remove(id);
};
module.exports = { getAllservices, getservice, addservice, updateservice, deleteservice };