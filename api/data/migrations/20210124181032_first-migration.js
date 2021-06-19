exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('id')
      users.string('firstName', 138)
        .notNullable()
      users.string('lastName', 138)
        .notNullable()
      users.string('email', 138)
        .notNullable().unique()
      users.string('password', 138)
        .notNullable().unique()
      users.string('role', 138)
        .notNullable()
      users.timestamps(false, true)
    })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('users')
}
