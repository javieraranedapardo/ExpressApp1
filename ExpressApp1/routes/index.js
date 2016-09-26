
/*
 * GET home page.
 */

exports.index = function (req, res) {
    res.render('index', { title: 'Express', year: new Date().getFullYear() });
};

exports.about = function (req, res) {

    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 'instance1.cnd201jodli4.us-west-2.rds.amazonaws.com',
        user: 'root',
        password: 'P1ssw4rd',
        database: 'prueba'
    });

    connection.connect();
    var filas = [{ Nombre: 'hola' }];

    connection.query('SELECT * from Usuario', function (err, rows, fields) {
        res.render('about', { title: 'About', year: new Date().getFullYear(), message: 'Your application description page', filas: rows });    
    });

    connection.end();

    
};

exports.contact = function (req, res) {
    res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Your contact page' });
};
