'use strict'

module.exports = {
  afterCreate({ result }) {
    strapi
      .plugin('twitter')
      .config('client')
      .v1.user({ screen_name: result.username })
      .then(data => {
        strapi
          .service('api::mention.mention')
          .update(result.id, { data: { data } })
      })
  },
}
