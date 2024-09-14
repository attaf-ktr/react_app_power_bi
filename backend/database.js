import mysql from 'mysql2'

const pool = mysql.createPool({ //a pool is a collection of connections to the darabase ; 
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'sales'
}).promise() // to use the promise api version 