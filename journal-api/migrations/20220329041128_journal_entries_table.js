exports.up = function (knex) {
  return knex.schema.createTable("entries", (table) => {
    table.increments("id").primary();
    table.string("location").notNullable();
    table.string("category").notNullable();
    table.string("text content").notNullable();
    table.date("date").notNullable();
    table.string("imageURL").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("entries");
};
