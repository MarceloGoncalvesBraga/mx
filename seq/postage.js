const Sequelize = require('sequelize')
const db = require('./db')

var Postagem = db.define('postagens', {
  // nao precisa coloquei auto increment
  // id: {
  //   type: Sequelize.INTEGER.UNSIGNED,
  //   allowNull: false,
  //   primaryKey: true,
  //   autoIncrement: true,
  //   field: 'id'
  // },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'title'

  },
  autor: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'autor'

  },
  texto: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'texto'

  },
  // nao precisa coloquei data aotomatica
  // createdAt: {
  //   type: Sequelize.DATE,
  //   allowNull: false,
  //   field: 'createdAt'
  // },

  // nao precisa coloquei data aotomatica
  // updateAt: {
  //   type: Sequelize.DATE,
  //   allowNull: false,
  //   field: 'updatedAt'
  // }
})
module.exports = Postagem

  // teste se esta funcionando para usar, remover // e npm start

// const resultadoCreate = Postagem.create({
//     title: 'Com sequelize',
//     autor: 'Marcelo Goncalves',
//     texto: 'Testando novos meios',
//     createdAt: '22/01/2023',
//     updateAt: '22/01/2023'
// })

// console.log(resultadoCreate)
