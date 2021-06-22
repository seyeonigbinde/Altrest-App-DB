exports.up = function (knex) {
  return knex.schema
    .createTable('users', table => {
      table.increments('user_id')
      table.string('firstName', 138)
        .notNullable()
      table.string('lastName', 138)
        .notNullable()
      table.string('email', 138)
        .notNullable().unique()
      table.string('password', 138)
        .notNullable()
      table.string('role', 138)
        .notNullable()
      table.timestamps(false, true)
    })

    .createTable('maintenance', table => {
      table.increments('maintenance_id')
      table.string('title', 500)
        .notNullable()
      table.string('request', 1500)
        .notNullable()
      table.string('request_image', 238)
          .notNullable()
      table.string('urgency', 138)
        .notNullable()
      table.timestamp('created_at', { precision: 6 })
        .defaultTo(knex.fn.now(6));
    })
}

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('maintenance')
    .dropTableIfExists('users')
}
