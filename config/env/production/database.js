module.exports = ({ env }) => {
  return {
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST'),
        port: '5432',
        database: env('DATABASE_NAME'),
        user: env('DATABASE_USER'),
        password: env('DATABASE_PASSWORD'),
        pool: {
          min: 0,
          max: 15,
        },
      },
      debug: false,
    },
  }
}
