require('dotenv').config();

module.exports = {
  env: {
    API_URL: process.env.API_URL,
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
  images: {
    domains: [process.env.IMAGES_URL],
    loader: 'default',
    imageSizes: [16, 32, 48, 64, 96],
  },
};
