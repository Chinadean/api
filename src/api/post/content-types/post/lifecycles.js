module.exports = {
  async beforeCreate(event) {
    const { data } = event.params

    if (data.localizations && data.localizations[0]) {
      //   const translator = await strapi.db
      //     .query('api::translator.translator')
      //     .findOne({
      //       where: { volunteer: { user: { id: data.createdBy } } },
      //     })
      // if (!translator) throw Error('You must add translator')
      // if (!data.translator) data.translator = translator.id
    } else data.creator = data.createdBy
  },
}
