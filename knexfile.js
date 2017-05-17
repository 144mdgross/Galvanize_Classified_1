// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/classified_dev',
    // pool: {
    //   min: 2,
    //   max: 10
    // },
    // migrations: {
    //   tableName: 'knex_migrations'
    // }
  },
test: {
    client: 'pg',
    connection: 'postgres://localhost/classified_test'
    // pool: {
    //   min: 2,
    //   max: 10
    // },
    // migrations: {
    //   tableName: 'knex_migrations'
    // }
  },
  production: {
    "client": "pg",
    "connection": process.env.DATABASE_URL
  }
};
