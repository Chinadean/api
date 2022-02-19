'use strict'

/**
 * trend service.
 */

const { createCoreService } = require('@strapi/strapi').factories

module.exports = createCoreService('api::trend.trend')
