"use strict";

const { parseMultipartData, sanitizeEntity } = require("strapi-utils");
const sizeOf = require("image-size");
const path = require("path");

module.exports = {
  /**
   * Create a record.
   *
   * @return {Object}
   */

  async create(ctx) {
    let entity;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.cards.create(data, { files });
    } else {
      entity = await strapi.services.cards.create(ctx.request.body);
    }
    return sanitizeEntity(entity, { model: strapi.models.card });
  },

  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.card.search(ctx.query);
    } else {
      entities = await strapi.services.card.find(ctx.query);
    }

    return entities.map((entity) => {
      const card = sanitizeEntity(entity, {
        model: strapi.models.card,
      });

      if (card.img !== null) {
        const dimensions = sizeOf(
          path.resolve(__dirname, "../../../public" + card.img.url)
        );
        card.img.width = dimensions.width;
        card.img.height = dimensions.height;
      } else {
        return ["this is dont have card img"];
      }

      return card;
    });
  },
};
