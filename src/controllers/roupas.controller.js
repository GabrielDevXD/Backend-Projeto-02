const roupasService = require('../services/roupas.services');
const mongoose = require('mongoose');
const roupas = require('../models/louddb');

const findAllRoupasController = async (req, res) => {
  const allroupas = await roupasService.findAllRoupasService();
  if (allroupas.lenght == 0) {
    return res
      .status(404)
      .send({ message: 'Não e existe essa roupa cadastrada!' });
  }
  res.send(allroupas);
};

const FindByIdRoupasController = async (req, res) => {
  const IdParam = req.params.id;

  const escolharoupas = await roupasService.FindByIdRoupasServices(IdParam);

  if (!escolharoupas) {
    return res.status(404).send({ message: 'Roupas não encontrada' });
  }
  res.send(escolharoupas);
};

const createroupasController = async (req, res) => {
  const newroupas = await roupasService.createroupasService(roupas);
  res.status(201).send(newroupas);
};

const updateroupasController = async (req, res) => {
  const idParam = req.params.id;

  const roupaEdit = req.body;

  const updateroupas = await roupasService.updateroupasService(
    idParam,
    roupaEdit,
  );
  res.send(updateroupas);
};

const deleteroupasController = async (req, res) => {
  const idParam = req.params.id;

  await roupasService.deleteroupasService(idParam);
  res.send({ mensage: 'Roupa deletada com sucesso :)' });
};

module.exports = {
  findAllRoupasController,
  FindByIdRoupasController,
  createroupasController,
  updateroupasController,
  deleteroupasController,
};
