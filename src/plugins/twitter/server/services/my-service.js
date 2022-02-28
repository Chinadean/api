'use strict'

module.exports = ({ strapi }) => ({
  async users(users) {
    return strapi
      .plugin('twitter')
      .config('client')
      .v1.users({ screen_name: users })
  },
  async searchUsers(query) {
    return strapi.plugin('twitter').config('client').v1.searchUsers(query)
  },
})
