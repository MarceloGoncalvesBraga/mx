var express = require('express')
var router = express.Router()
router.use(express.static('public'))
var pool = require('../data/config')

router.get('', function (req, res) {
  res.sendFile(__dirname + '/' + 'index.html')
})

// cadastrar comentarios
router.post('/save/comment', function (req, res) {
  var nome = req.body.nome
  var email = req.body.email
  var comentario = req.body.comentario
  var postagem = req.body.postagem

  // res.send(nome+email+comentario+postagem)
  pool.query('INSERT INTO comentario set nome=?, email=?,comentario=?,postagem=? ', [nome, email, comentario, ], function (err, rows, fields) {
    if (rows) {
      pool.query("SELECT * FROM comentario WHERE id='" + rows.insertId
        + "' LIMIT 1", function (err, rows) {
          if (!err && rows.length > 0) {
            res.json(rows)
          } else {
            res.json([])
          }
        })
    }
  })
})
module.exports = router
