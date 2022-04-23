const mongoose = require('mongoose');

function connectToDatabase() {
  mongoose
    .connect('mongodb://localhost:27017/loudgg-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Conectado ao banco de dados com sucesso');
    })
    .catch((err) => {
      return console.log(`Erro na conexao com o banco: ${err}`);
    });
}

module.exports = connectToDatabase;
