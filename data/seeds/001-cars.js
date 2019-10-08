
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').delete()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: 1, make: 'Corolla', model: 'Toyota', mileage: 2000, year: 2017},
        {VIN: 2, make: 'Encore', model: 'Buick', mileage: 13000, year: 2018},
        {VIN: 3, make: 'Explorer', model: 'Ford', mileage: 6000, year: 2014},
        {VIN: 4, make: 'Q7', model: 'Audi', mileage: 0, year: 2020},
        {VIN: 5, make: 'Civic', model: 'Honda', mileage: 8500, year: 2018},
        {VIN: 6, make: 'Pilot', model: 'Honda', mileage: 4200, year: 2016},
      ]);
    });
};
