const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model')
const productRoute = require ('./routes/product.route.js')
const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Routes
app.use("/api/products", productRoute)


app.get('/',(req,res) => {
  res.send("Hello from the Server")
})



mongoose.connect("mongodb+srv://dbahsam:dbahsampassword@backenddb.elzxv3n.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
.then( () => {
  console.log("Connected to the database")
  app.listen(3000, () => {
    console.log("server is running 3000")
  })
})
.catch( () => {
  console.log("Connection Failed")
})