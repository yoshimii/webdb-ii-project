const knex = require('knex')
const db = require('../dbConfig')

module.exports = {
    get(id) {
        return (id) 
            ? db('sales').where('id', id)
            : db('sales')
    },

    insert(body) {
        return db('sales')
            .insert(body)
            .then(_ => body)
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