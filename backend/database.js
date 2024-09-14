import mysql from 'mysql2'


import dotenv from 'dotenv'
dotenv.config()


const pool = mysql.createPool({ //a pool is a collection of connections to the darabase ; 
    host: process.env.MYSQL_HOST,   //use env variables to hide sensetive infos ; also t wont be any prob if another pers want to use the code :)
    user: process.env.MYSQL_USER,
    password:  process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise() // to use the promise api version 

export async function getcustomers() {
    const [rows] = await pool.query("SELECT * FROM customers")
    return rows
  }

export async function getcustomer(customer_code) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM customers
    WHERE customer_code = ?  
    `, [customer_code])
    return rows[0]
  }


  


  const customer = await getcustomer('Cus03')
  console.log(customer)