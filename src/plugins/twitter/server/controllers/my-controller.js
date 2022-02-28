'use strict'

module.exports = {
  users(ctx) {
    const result = strapi
      .plugin('twitter')
      .service('myService')
      .users(ctx.query.q)

    return result
  },
  searchUsers(ctx) {
    const result = strapi
      .plugin('twitter')
      .service('myService')
      .searchUsers(ctx.query.q)

    return result
  },
}
