'use strict'

/**
 * juri-vote service.
 */

const { createCoreService } = require('@strapi/strapi').factories

module.exports = createCoreService('api::juri-vote.juri-vote')
