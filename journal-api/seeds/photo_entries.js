/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const { photoData } = require("./photoData");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("entries").del();
  await knex("entries").insert(photoData);
};
