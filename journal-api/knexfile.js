require("dotenv").config();

module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "rootroot",
      database: "journal",
      charset: "utf8",
    },
  },
  production: {
    client: "mysql2",
    connection: {
      host: process.env.AWS_CONNECTION_ENDPOINT,
      port: 3306,
      user: process.env.AWS_DB_USERNAME,
      password: process.env.AWS_DB_PASSWORD,
      database: "journal",
      socketPath: "/tmp/mysql.sock",
      charset: "utf8",
    },
    pool: {
      min: 2,
      max: 20,
    },
    debug: true,
  },
};
