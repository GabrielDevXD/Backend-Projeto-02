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

const updateroupasService = (id, roupaEdit) => {
  roupaEdit['id'] = id;
  const roupasIndex = roupas.findIndex((roupas) => roupas.id == id);
  roupas[roupasIndex] = roupaEdit;
  return roupaEdit;
};

const deleteroupasService = (id) => {
  const roupasIndex = roupas.findIndex((roupas) => roupas.id == id);
  return roupas.splice(roupasIndex, 1);
};

module.exports = {
  findAllRoupasService,
  createroupasService,
  FindByIdRoupasServices,
  updateroupasService,
  deleteroupasService,
};
