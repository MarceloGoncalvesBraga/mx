
var express = require('express')

var express = require('express')
var router = express.Router()
var Postagem = require('./postage.js');

router.get('/postagem', function (req, res) {
    Postagem.findAll().then((result) => res.json(result));
})
router.post('/postagem', function (req, res) {
    // Postagem.create({
    //     title: req.body.title,
    //     autor: req.body.autor,
    //     texto: req.body.texto,
    // decodeToken = jwt.decodeToken(req.headers['x-access-token'])
    updatedAt = '22/01/2023'
    // let { title, autor, texto} = req.body
    Postagem.create({
        title: req.body.title,
        autor: req.body.autor,
        texto: req.body.texto,
        updatedAt: updatedAt
      }).then((result) => res.json(result));})

router.get('/postagem/:id', function (req, res) {
    Postagem.findByPk(req.params.id).then((result) => res.json(result));
})
router.put('/postagem/:id', function (req, res) {
    Postagem.update(
        {
            title: req.body.title,
            autor: req.body.autor,
            texto: req.body.texto,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
    
      Postagem.findByPk(req.params.id).then((result) => res.json(result));
})
router.delete('/postagem/:id', function (req, res) {
    Postagem.destroy({
        where: {
          id: req.params.id,
        },
      });
    
      Postagem.findAll().then((result) => res.json(result));
})
module.exports = router

