const knex = require('knex')
const db = require('../dbConfig')

module.exports = {
    get(id) {
        return (id) 
            ? db('sales')
            : db('sales').where('id', id)
    },

    insert(body) {
        return db('sales')
            .insert(req.body)
            .then(_ => req.body)
    },

    update(id, changes) {
        return db('sales')
            .update(changes)
            .where('id', id)
    },

    remove(id) {
        return db('sales')
        .where('id', id)
        .delete()
    }
}