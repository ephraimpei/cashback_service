module.exports = {
  client: 'postgresql',
  connection: 'postgresql://postgres:postgres@db:5432/cashback',
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations'
  }
}