module.exports = plugin => {
  const sanitizeOutput = user => {
    const {
      password,
      resetPasswordToken,
      confirmationToken,
      createdBy,
      updatedBy,
      ...sanitizedUser
    } = user // be careful, you need to omit other private attributes yourself
    return sanitizedUser
  }

  plugin.controllers.user.me = async ctx => {
    if (!ctx.state.user) {
      return ctx.unauthorized()
    }

    const populate = (ctx.query && ctx.query.populate) || ['role']

    const user = await strapi.entityService.findOne(
      'plugin::users-permissions.user',
      ctx.state.user.id,
      { populate },
    )

    ctx.body = sanitizeOutput(user)
  }

  plugin.controllers.user.find = async ctx => {
    const populate = (ctx.query && ctx.query.populate) || ['role']

    const users = await strapi.entityService.findMany(
      'plugin::users-permissions.user',
      { ...ctx.params, populate },
    )

    ctx.body = users.map(user => sanitizeOutput(user))
  }

  plugin.controllers.user.findOne = async ctx => {
    const populate = (ctx.query && ctx.query.populate) || ['role']

    const users = await strapi.entityService.findOne(
      'plugin::users-permissions.user',
      { ...ctx.params, populate },
    )

    ctx.body = users.map(user => sanitizeOutput(user))
  }

  return plugin
}
