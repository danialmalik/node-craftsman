'use strict';
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'abcd1234',
    database: 'node'
});

// connection.query(
//     'SELECT id, content FROM test', function (err, results, fields) {
//         if (err) {
//             console.log('A database error occured!');
//             console.error(err)
//         } else {
//             console.log(results);
//         }
//         connection.end();
//     }
// );



// Using streaming API

var query = connection.query('SELECT id, content FROM test');

query.on('error', function (err) {
    console.log('A database error occured:'); console.log(err);
});
query.on('fields', function (fields) {
    console.log('Received fields information.');
});
query.on('result', function (result) {
    console.log('Received result:'); console.log(result);
});
query.on('end', function () {
    console.log('Query execution has finished.'); connection.end();
});
