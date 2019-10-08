const knex = require('knex')
const db = require('./dbConfig')

module.exports = {
    get(id) {
        return (id) 
            ? db('cars')
            : db('cars').where('id', id)
    },

    insert(body) {
        return db('cars')
            .insert(req.body)
            .then(_ => req.body)
    },

    update(id, changes) {
        return db('cars')
            .update(changes)
            .where('id', id)
    },

    remove(id) {
        return db('cars')
        .where('id', id)
        .delete()
    }
}