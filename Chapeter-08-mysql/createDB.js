'use strict';
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'abcd1234'
});

connection.query('CREATE DATABASE node', function (err) {
    if (err) {
        console.log('Could not create database "node".');
        console.error(err)
    }
});

connection.query('USE node', function (err) {
    if (err) {
        console.log('Could not switch to database "node".');
        console.error(err)
    }
});


connection.query('CREATE TABLE test ' +
    '(id INT(11) AUTO_INCREMENT, ' +
    ' content VARCHAR(255), ' + ' PRIMARY KEY(id))',
    function (err) {
        if (err) {
            console.log('Could not create table "test".');
            console.error(err)
        }
    }
);


connection.query('INSERT INTO test (content) VALUES ("Hello")');
connection.query('INSERT INTO test (content) VALUES ("World")');


connection.query('CREATE TABLE passwords ' +
    '(id INT(11) AUTO_INCREMENT, ' +
    ' password VARCHAR(255), ' + ' PRIMARY KEY(id))',
    function (err) {
        if (err) {
            console.log('Could not create table "passwords".');
            console.error(err)
        }
    }
);

connection.query('INSERT INTO passwords (password) VALUES ("secret")');
connection.query('INSERT INTO passwords (password) VALUES ("dont_tell")');


connection.end();
