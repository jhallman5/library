
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', (table) => {
    table.increments()
    table.string('title')
    table.string('author')
    table.string('URL_image')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books')
};
