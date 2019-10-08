
exports.up = function (knex, Promise) {
    return knex.schema.createTable('sales', tbl => {
        tbl.increments();
        tbl.integer('SalePrice')
            .notNullable();
        tbl.string('Buyer')
            .notNullable();
        tbl.string('OrderNumber')
            .notNullable()
            .unique();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('sales');
};
