const withImages = require('next-images');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = withImages({
  output: 'export',  // Add this line
  trailingSlash: true,
  images: {
    disableStaticImages: true,
    domains: ['firebasestorage.googleapis.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  publicRuntimeConfig: {
    localeSubpaths:
      typeof process.env.LOCALE_SUBPATHS === 'string'
        ? process.env.LOCALE_SUBPATHS
        : 'none',
  },
  webpack: (config, options) => {
    config.plugins.push();  // Not sure why this is empty, you might want to review it.
    return config;
  },
});
