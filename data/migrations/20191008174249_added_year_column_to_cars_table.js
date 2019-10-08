
exports.up = function(knex) {
  return knex.schema.table('cars', tbl => {
      tbl.timestamps();
      tbl.integer('year')
        .notNullable();
      tbl.string('transmissin type', 128);
      tbl.string('status of title', 128);
  })
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists('cars');
};
