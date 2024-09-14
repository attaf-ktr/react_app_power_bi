import mysql from 'mysql2'

const pool = mysql.createPool({ //a pool is a collection of connections to the darabase ; 
    host: '127.0.0.1',
    user: 'root',
    password: '1234sql@',
    database: 'sales'
}).promise() // to use the promise api version 

export async function getcustomers() {
    const [rows] = await pool.query("SELECT * FROM customers")
    return rows
  }
  const customers = await getcustomers()
  console.log(customers)