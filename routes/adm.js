var express = require('express')
var router = express.Router()
var pool = require('../data/config')

// get all resultados
router.get('/', function (req, res) {
  pool.query('select * from postagens', function (err, result) {
    if (err) throw err
    else {
      obj = { print: result }
      res.render('show', obj)
    }
  })
})

// pagina para nova postagem
router.get('/new', function (req, res) {
  obj = {}
  res.render("insert", obj);
})

// edite postagem
var edit = 0
router.get('/update', function (req, res) {
  if (req.query.id != '') {
    pool.query('SELECT * FROM postagens where id = ? ', [req.query.id], function (error, result) {
      if (!!error) {
        console.log('edit Error' + error)
      } else {
        edit = result
        obj = { print: result, req: edit }
        res.render("update", obj)
      }
    })
  }

})

// delete postagem
router.get('/delete', function (req, res) {
  var id = req.query.id

  pool.query('delete from postagens where id=?', [id], function (err, rows, fields) {
    if (!!err) {
      console.log('Error' , +err)
    }else {
      console.log('record deleted')
      return res.redirect('/show')
     res.json({"ResponseCode":"1","ResponseMessage":"Record deleted successfully!","data":rows})
    }
  })
})

// nova postagem
router.post('/save', function (req, res) {
  var title = req.body.title
  var autor = req.body.autor
  var texto = req.body.texto
  // res.send(id+title+autor+texto)
  pool.query('INSERT INTO postagens set title=?, autor=?,texto=? ', [title, autor, texto], function (err, rows, fields) {
    if (!!err) {
      console.log('error', +err)
    }else {
      res.json({'ResponseCode': '1','ResponseMessage': 'Data Updated Successfully','data': rows})
    }
  })
})

// update postagem
router.post('/updatesave', function (req, res) {
  var id = req.body.id
  var title = req.body.title
  var autor = req.body.autor
  var texto = req.body.texto
  // res.send(id+title+autor+texto)
  pool.query('UPDATE postagens set title=?, autor=?,texto=? where id=?', [title, autor, texto, id], function (err, rows, fields) {
    if (!!err) {
      console.log('Error' , +err)
    }else {
      console.log('ok')
      res.json({'ResponseCode': '1','ResponseMessage': 'Data Updated Successfully','data': rows})
    }
  })
})

module.exports = router
