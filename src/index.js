'use strict'

const faker = require('faker')

const ARRAY = [, , , , ,]
const LOCALES = ['en', 'tr', 'nl']

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    const _blog = 'api::blog.blog'
    const _page = 'api::page.page'
    const _subpage = 'api::subpage.subpage'
    const _hashtag = 'api::hashtag.hashtag'
    const _post = 'api::hashtag-post.hashtag-post'
    const _mention = 'api::mention.mention'
    const _privacy = 'api::privacy.privacy'
    const _terms = 'api::term.term'
    // const _trends = "api::trend.trend";

    const blogs = await strapi.controller(_blog).find({})
    console.log('blogs.data', blogs.data)

    const pages = await strapi.controller(_page).find({})
    console.log('pages.data', pages.data)

    const subpages = await strapi.controller(_subpage).find({})
    console.log('subpages.data', subpages.data)

    const hashtags = await strapi.controller(_hashtag).find({})
    console.log('hashtags.data', hashtags.data)

    const posts = await strapi.controller(_post).find({})
    console.log('posts.data', posts.data)

    const mentions = await strapi.controller(_mention).find({})
    console.log('mentions.data', mentions.data)

    const privacy = await strapi.controller(_privacy).find({})
    console.log('privacy.data', privacy)

    const terms = await strapi.controller(_terms).find({})
    console.log('terms', terms)

    // const trends = await strapi.controller(_trends).find({});
    // console.log("trends", trends);
  },
}
