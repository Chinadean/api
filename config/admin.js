module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e9a13e487ddd361c5fba80040173f01f'),
  },
})
