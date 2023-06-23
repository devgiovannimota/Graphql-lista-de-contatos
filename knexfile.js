require("dotenv").config();

module.exports = {
  client: "pg",
  connection: {
    database: "postgres",
    user: "postgres",
    password: `${process.env.DB_PASSWORD}`,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./src/db/migrations",
  },
};
