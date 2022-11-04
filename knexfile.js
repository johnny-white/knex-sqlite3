module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/stats',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
  },

  // production: {
  //   client: 'pg',
  //   connection: {
  //     database: 'my_db',
  //     user: 'username',
  //     password: 'password',
  //   },
  // },
};
