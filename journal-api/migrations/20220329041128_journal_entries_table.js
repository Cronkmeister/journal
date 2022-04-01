exports.up = function (knex) {
  return knex.schema.createTable("entries", (table) => {
    table.increments("id").primary();
    table.string("location").notNullable();
    table.string("category").notNullable();
    table.text("textContent", ["TEXT"]).notNullable();
    table.date("date").notNullable();
    table.text("imageURL", ["MEDIUMTEXT"]).notNullable();
    table.string("camera");
    table.string("film");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("entries");
};
