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
        ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
        },
      },
      debug: false,
    },
  }
}
