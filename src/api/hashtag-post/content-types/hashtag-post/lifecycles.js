module.exports = {
  beforeCreate(event) {
    const { data } = event.params

    if (data.localizations[0]) data.translator = data.createdBy
    else data.creator = data.createdBy
  },
}
