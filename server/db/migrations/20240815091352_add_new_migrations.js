/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.table('books', (table) => {
    table.string('author', 128)
    table.text('cover_image')
  })
}

export const down = function (knex) {
  return knex.schema.table('books', (table) => {
    table.dropColumn('author')
    table.dropColumn('cover_image')
  })
}
