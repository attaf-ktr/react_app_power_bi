import express from 'express';
import { getcustomers, getcustomer, createcustomer } from './database.js';  // Database functions

const app = express();

app.use(express.json());  // Middleware to parse JSON

// Routes
app.get("/customers", async (req, res) => {
    try {
        const customers = await getcustomers();
        res.status(200).send(customers);
    } catch (error) {
        res.status(500).send("Error retrieving customers.");
    }
});

app.get("/customers/:customer_code", async (req, res) => {
    try {
        const customer_code = req.params.customer_code;
        const customer = await getcustomer(customer_code);
        if (customer) {
            res.status(200).send(customer);
        } else {
            res.status(404).send("Customer not found.");
        }
    } catch (error) {
        res.status(500).send("Error retrieving customer.");
    }
});

app.post("/customers", async (req, res) => {
    try {
        const { customer_code, customer_name, customer_type } = req.body;
        if (!customer_code || !customer_name || !customer_type) {
            return res.status(400).send("customer_code, customer_name, and customer_type are required.");
        }
        const newCustomer = await createcustomer(customer_code, customer_name, customer_type);
        res.status(201).send({
            message: "Customer created successfully",
            customer: newCustomer
        });
    } catch (error) {
        res.status(500).send("Error creating customer.");
    }
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});