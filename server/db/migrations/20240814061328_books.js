/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable('books', function (table) {
    table.increments('id').primary()
    table.string('title').notNullable()
    table.text('description')
    table.text('review')
  })
}

export const down = function (knex) {
  return knex.schema.dropTable('books')
}
