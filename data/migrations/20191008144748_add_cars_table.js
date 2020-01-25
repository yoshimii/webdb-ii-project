
exports.up = function (knex, Promise) {
	return knex.schema.createTable('cars', tbl => {
		tbl.increments();
		tbl.integer('VIN').notNullable().unique();
		tbl.string('Make').notNullable();
		tbl.string('Model').notNullable();
		tbl.integer('Mileage').notNullable();
		tbl.timestamps();
		tbl.integer('year').notNullable();
		tbl.string('transmissin type', 128);
		tbl.string('status of title', 128);
	})
}

exports.down = function (knex, Promise) {
	knex.schema.dropTableIfExists('cars');
};
