'use strict'

/**
 * juri service.
 */

const { createCoreService } = require('@strapi/strapi').factories

module.exports = createCoreService('api::juri.juri')
