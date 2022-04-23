const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id invalido!' });
  }
  next();
};

const validObjetBody = (req, res, next) => {
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
};

module.exports = {
  validId,
  validObjetBody,
};
