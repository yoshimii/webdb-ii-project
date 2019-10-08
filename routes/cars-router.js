const express = require('express')
const CarsModel = require('../data/models/CarsModel')
const { withCatch, objectFromEntries } = require('../utils.js')

const router = express.Router()

router.get('/', async (req, res) => {
    const [err, cars] = await withCatch( CarsModel.get() )

    if (err) res.status(500).json({error: err})
    else if (!cars.length) res.status(404).json({error: "No cars found."})
    else res.status(200).json(cars)
})

router.get('/:id', async (req, res) => {
    const [err, car] = await withCatch( CarsModel.get(req.params.id) )
    
    if (err) res.status(500).json({error: err})
    else if (!car.length) res.status(404).json({error: "No cars found."})
    else res.status(200).json(car)
})

router.post('/',
    function validateFields(req, res, next) {
        const lowerCase = str => str.toLowerCase()

        req.body = objectFromEntries(
            Object.entries({...req.body})
            .map( ([k,v]) => [lowerCase(k), v])
        )

        let missingFields = []
        if (!req.body.vin) missingFields.push("Missing a 'VIN' field")
        if (!req.body.model) missingFields.push("Missing a 'model' field") 
        if (!req.body.make) missingFields.push("Missing a 'make' field")
        if (!req.body.mileage) missingFields.push("Missing a 'mileage' field")
        if (!req.body.year) missingFields.push("Missing a 'year' field")
        
        if (missingFields.length) res.status(400).json({
            error: 'Missing required fields', 
            missingFields: missingFields
        })
        else next()
    },  
    async (req, res) => {
        const [err, car] = await withCatch( CarsModel.insert(req.body) )

        console.log('CAR', car)
        
        if (err) res.status(500).json({error: err})
        else if (!Object.keys(car).length) res.status(404).json({ error: "No car was added"})
        else res.status(200).json(car)
    }
)

router.put('/:id', async (req, res) => {
    const [err, beforeUpdate] = await withCatch( CarsModel.get(req.params.id) )
    const [err2, count] = await withCatch( CarsModel.update(req.params.id, req.body) )

    if (err || err2) res.status(500).json({error: err || err2})
    else if (!count) res.status(500).json({error: "There was a problem updating the car with the id of " + req.params.id})
    else res.status(200).json({
        success: "Successfully updatd the car with the id of " + req.params.id,
        before: beforeUpdate,
        after: req.body
    })
})

router.delete('/:id', async (req, res) => {
    const [err, count] = await withCatch( CarsModel.remove(req.params.id) )

    if(err) res.status(500).json({ error: err})
    else res.status(200).json({ success: `Deleted ${count} cars from system with the id of ${req.params.id}`})
})


module.exports = router