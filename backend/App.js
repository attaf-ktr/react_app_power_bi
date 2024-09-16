import express from 'express'
import { getcustomers, getcustomer, createcustomer } from './database.js'

const app = express()

app.use(express.json())

app.get("/customers", async (req, res) => { //get the custmers list from db 
    const customers = await getcustomers() // send it back
    res.send(customers)
  })


  app.get("/customers/:customer_code", async (req, res) => {
    const customer_code= req.params.customer_code
    const customer = await getcustomer(customer_code)
    res.send(customer)
  })
  
  app.post("/customers", async (req, res) => {
    const { customer_code,customer_name, customer_type } = req.body
    const note = await createcustomer(customer_code,customer_name, customer_type)
    res.status(201).send(customer)
  })
  
  
  app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke 💩')
  })
  
  app.listen(8080, () => {
    console.log('Server is running on port 8080')
  })