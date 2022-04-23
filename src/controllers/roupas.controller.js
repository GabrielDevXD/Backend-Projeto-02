const roupasService = require('../services/roupas.services');
const mongoose = require('mongoose');

const findAllRoupasController = async (req, res) => {
  const roupas = await roupasService.findAllRoupasService();
  if (roupas.lenght == 0) {
    return res
      .status(404)
      .send({ message: 'Não e existe essa roupa cadastrada!' });
  }
  res.send(roupas);
};

const FindByIdRoupasController = async (req, res) => {
  const parametroId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(parametroId)) {
    return res.status(400).send({ message: 'Id invalido!' });
  }
  const escolharoupas = await roupasService.FindByIdRoupasServices(parametroId);

  if (!escolharoupas) {
    return res.status(404).send({ message: 'Roupas não encontrada' });
  }
  res.send(escolharoupas);
};

const createroupasController = async (req, res) => {
  const roupas = req.body;
  if (
    !roupas ||
    !roupas.nome ||
    !roupas.descricao ||
    !roupas.foto ||
    !roupas.preco
  ) {
    return res
      .status(400)
      .send({ message: 'Envie todos os campos da sua roupa' });
  }
  const newroupas = await roupasService.createroupasService(roupas);
  res.status(201).send(newroupas);
};

const updateroupasController = (req, res) => {
  const idParam = req.params.id;
  const roupaEdit = req.body;
  const updateroupas = roupasService.updateroupasService(idParam, roupaEdit);
  res.send(updateroupas);
};

const deleteroupasController = (req, res) => {
  const idParam = req.params.id;
  roupasService.deleteroupasService(idParam);
  res.send({ mensage: 'Roupa deletada com sucesso :)' });
};

module.exports = {
  findAllRoupasController,
  FindByIdRoupasController,
  createroupasController,
  updateroupasController,
  deleteroupasController,
};
