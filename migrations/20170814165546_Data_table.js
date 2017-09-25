exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('DataTable', (table) => {
    table.increments('id')
    table.string('text')
    table.float('numbers')
    table.string('url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('DataTable')
};
