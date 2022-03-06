module.exports = {
  async beforeCreate(event) {
    const { data } = event.params

    if (data.localizations && data.localizations[0]) {
      const translator = await strapi.db
        .query('api::translator.translator')
        .findOne({ where: { user: { id: data.createdBy } } })

      if (!data.translator) data.translator = translator.id
    } else data.creator = data.createdBy
  },
}
