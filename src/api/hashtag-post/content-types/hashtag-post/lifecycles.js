module.exports = {
  beforeCreate(event) {
    const { data } = event.params

    if (data.localizations[0]) {
      if (!data.translator) data.translator = data.createdBy
    } else data.creator = data.createdBy
  },
}
