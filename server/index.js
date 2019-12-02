require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose');

const app = express();

app.use(express.static(__dirname + "/build"));

app.use(express.json());

const { CONNECTION_STRING, SERVER_PORT } = process.env;

mongoose.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(() => {
  console.log('Connection successful!')
});

const {
  getAllCustomers,
  postCustomer,
  updateCustomer,
  deleteCustomer
} = require("./controller/customerController");


app.get("/api/customer", getAllCustomers);

app.post("/api/customer", postCustomer);

app.put("/api/customer/:id", updateCustomer);

app.delete("/api/customer/:id", deleteCustomer);

const port = SERVER_PORT || 4000;
app.listen(port, () => console.log(`Server running on ${port}.`));
