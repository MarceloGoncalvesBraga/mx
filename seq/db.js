const Sequelize = require('sequelize');

const dbName = 'mx'; // passar os dados do .env para as constantes
const dbUser = 'marcelo';
const dbHost = 'localhost';
const dbPassword = '190588';

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  //passar os dados para o sequelize
  dialect: "mysql", //informar o tipo de banco que vamos utilizar
  host: dbHost, //o host, neste caso estamos com um banco local
});

module.exports = sequelize;
