exports.up = function (knex) {
  return knex.schema.createTable('stats', (table) => {
    table.increments();

    table.string('name');
    table.integer('rate');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('stats');
};
