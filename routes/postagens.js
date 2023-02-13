var express = require('express')
var router = express.Router()
var pool = require('../data/config')
// Listar postagens
router.get('/api', function (req, res, next) {
  pool.query('select * from postagens', function (err, result) {
    if (err) {
      console.log('Error' , +err)
    }else {
      res.json(result)
    }
  })
})
// Buscar postagem pelo id
router.get('/select', function (req, res, next) {
    var id = req.query.id

  pool.query("SELECT * FROM postagens WHERE id='" + id
    + "' LIMIT 1", function (err, rows) {
      if (!err && rows.length > 0) {
        res.json(rows)
      } else {
        res.json([])
      }
    })
})
// Buscar comentario pelo id
router.get('/coments', function (req, res, next) {
  var id = req.query.id
  pool.query("SELECT * FROM comentarios WHERE postagens='" + id
    + "' LIMIT 30", function (err, rows) {
      if (!err && rows.length > 0) {
        res.json(rows)
      } else {
        res.json([])
      }
    })
})

module.exports = router
