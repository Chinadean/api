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
          max: 48,
          idleTimeoutMillis: 30000000,
          createTimeoutMillis: 30000000,
          acquireTimeoutMillis: 30000000,
          propagateCreateError: false,
          ssl: {
            rejectUnauthorized: false,
          },
        },
      },
      debug: false,
    },
  }
}
