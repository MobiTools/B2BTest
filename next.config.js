// Enable this code below for Server Side Rendering/Translation (SSR)

const withImages = require("next-images");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = withImages({
  // Enable this code below for Server Side Rendering/Translation (SSR)

  trailingSlash: true,
  images: {
    disableStaticImages: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  publicRuntimeConfig: {
    localeSubpaths:
      typeof process.env.LOCALE_SUBPATHS === "string"
        ? process.env.LOCALE_SUBPATHS
        : "none",
  },
  webpack: (config, options) => {
    true,
      config.plugins
        .push
        //      new ESLintPlugin({
        //        exclude: ['node_modules']
        //      })
        ();
    return config;
  },
});
