
exports.up = function (knex, Promise) {
    return knex.schema.createTable('sales', tbl => {
        tbl.increments();
        tbl.integer('CarId').notNullable().unique();
        tbl.foreign("CarId").references('vin').inTable('cars');
        tbl.integer('SalePrice').notNullable();
        tbl.string('Buyer').notNullable();
        tbl.string('OrderNumber').notNullable().unique();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('sales');
};
