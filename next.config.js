const withImages = require("next-images");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = withImages({
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  publicRuntimeConfig: {
    localeSubpaths:
      typeof process.env.LOCALE_SUBPATHS === "string"
        ? process.env.LOCALE_SUBPATHS
        : "none",
  },
  webpack: (config, options) => {
    config.plugins
      .push
      // new ESLintPlugin({
      //   exclude: ['node_modules']
      // })
      ();
    return config;
  },
});
