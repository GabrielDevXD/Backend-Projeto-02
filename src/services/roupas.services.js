const roupas = require('../models/louddb');

const findAllRoupasService = async () => {
  const roupa = await roupas.find();
  return roupa;
};

const FindByIdRoupasServices = async (parametroId) => {
  const roupa = await roupas.findById(parametroId);
  return roupa;
};

const createroupasService = async (newroupas) => {
  const roupasCreate = await roupas.create(newroupas);
  return roupasCreate;
};

const updateroupasService = async (id, roupaEdit) => {
  const updateroupas = await roupas.findByIdAndUpdate(id, roupaEdit);
  return updateroupas;
};

const deleteroupasService = async (id) => {
  return await roupas.findOneAndDelete(id);
};

module.exports = {
  findAllRoupasService,
  createroupasService,
  FindByIdRoupasServices,
  updateroupasService,
  deleteroupasService,
};
