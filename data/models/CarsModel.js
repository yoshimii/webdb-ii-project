const knex = require('knex')
const db = require('../dbConfig')

module.exports = {
    get(id) {
        return (id) 
            ? db('cars').where('id', id)
            : db('cars')
    },

    insert(body) {
        return db('cars')
            .insert(body)
            .then(_ => body)
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