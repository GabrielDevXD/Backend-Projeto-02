const mongoose = require('mongoose');

const roupasSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  descricao: {
    type: String,
    require: true,
  },
  foto: {
    type: String,
    require: true,
  },
  preco: {
    type: Number,
    require: true,
  },
});

const roupas = mongoose.model('roupas', roupasSchema);

module.exports = roupas;
