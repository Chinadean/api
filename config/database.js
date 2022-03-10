const { parse } = require('pg-connection-string')

module.exports = ({ env }) => {
  const { host, user, password, database } = parse(env('DATABASE_URL'))
  console.log('parse', parse(env('DATABASE_URL')))
  return {
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', host || 'localhost'),
        port: '5432',
        database: env('DATABASE_NAME', database || 'samen_api'),
        user: env('DATABASE_USER', user || 'samen_api_user'),
        password: env('DATABASE_PASSWORD', password || 'Samen123'),
        pool: {
          min: 0,
          max: 10,
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
