const express = require('express')
const router = express.Router()
const SalesModel = require('../data/models/SalesModel')
const { withCatch } = require('../utils.js')

router.get('/', async (req, res) => {
    const [err, sales] = await withCatch( SalesModel.get() )

    if (err) res.status(500).json({error: err})
    else if (!sales.length) res.status(404).json({error: "No sales found."})
    else res.status(200).json(sales)
})

router.get('/:id', async (req, res) => {
    const [err, sale] = await withCatch( SalesModel.get(req.params.id) )
    
    if (err) res.status(500).json({error: err})
    else if (!sale.length) res.status(404).json({error: "No sales found."})
    else res.status(200).json(sale)
})

router.post('/', async (req, res) => {
    const [err, sale] = await withCatch( SalesModel.insert(req.body) )

    if (err) res.status(500).json({error: err})
    else if (!Object.keys(sale).length) res.status(404).json({ error: "No sale was added"})
    else res.status(200).json(sale)
})

router.put('/:id', async (req, res) => {
    const [err, count] = await withCatch( SarsModel.update(req.params.id, req.body) )
    const [err2, beforeUpdate] = await withCatch( SalesModel.get(req.params.id) )

    if (err || err2) res.status(500).json({error: err || err2})
    else if (!count) res.status(500).json({error: "There was a problem updating the sale with the id of " + req.params.id})
    else res.status(200).json({
        success: "Successfully updatd the sale with the id of " + id,
        before: beforeUpdate,
        after: req.body
    })
})

router.delete('/:id', async (req, res) => {
    const [err, count] = await withCatch( SalesModel.remove(req.params.id) )

    if(err) res.status(500).json({ error: err})
    else res.status(500).json({ success: `Deleted ${count} sales from system with the id of ${req.params.id}`})
})


module.exports = router