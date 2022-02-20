module.exports = ({ env }) => ({
  host: '0.0.0.0',
  url: 'https://api.samenvvv.nl',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
})
