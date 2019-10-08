const express = require('express')
const helmet = require('helmet');


//routes 
const carsRouter = require('./routes/cars-router')
const salesRouter = require('./routes/sales-router')

const server = express()

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send('<h1> API is Running<h1>')
})

server.use('/api/cars', carsRouter)
server.use('/api/sales', salesRouter)

module.exports = server