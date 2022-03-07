const cronTasks = require('./cron-tasks')

module.exports = ({ env }) => ({
  host: '0.0.0.0',
  url: 'https://api.samenvvv.nl',
  app: {
    keys: env.array('APP_KEYS'),
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
  cron: {
    enabled: true,
    tasks: cronTasks,
  },
})
