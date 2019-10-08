
exports.up = function (knex, Promise) {
	return knex.schema.createTable('cars', tbl => {
		tbl.increments();
		tbl.integer('VIN')
			.notNullable()
			.unique();
		tbl.string('Make')
			.notNullable();
		tbl.string('Model')
			.notNullable();
		tbl.integer('Mileage')
			.notNullable();
	})
}

exports.down = function (knex, Promise) {
	knex.schema.dropTableIfExists('cars');
};
