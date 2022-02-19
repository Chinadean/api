const { TwitterApi } = require('twitter-api-v2')
const twitterClient = new TwitterApi(process.env.BEARER_TOKEN)
const client = twitterClient.readOnly

module.exports = ({ env }) => ({
  twitter: {
    enabled: true,
    resolve: './src/plugins/twitter',
    config: {
      client,
    },
  },
  email: {
    enabled: true,
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'mail.privateemail.com',
        port: 465,
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: 'no-reply@samenvvv.nl',
        defaultReplyTo: 'info@samenvvv.nl',
      },
    },
  },
})
