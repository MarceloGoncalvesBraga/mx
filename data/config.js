var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'marcelo',
    password : '190588',
    database : 'mx'
});
connection.connect(function(err){
    if(!err) {
        console.log("Database Conectada !");
    } else {
        console.log("Error durante conexao com database");
    }
});
module.exports = connection;