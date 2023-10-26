const withImages = require("next-images");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = withImages({
  trailingSlash: true,
  images: {
    disableStaticImages: true,
  },
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

  // Adăugați configurația pentru a exclude paginile cu getServerSideProps de la exportul static.
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    if (dev) {
      return defaultPathMap;
    }

    const filteredPathMap = { ...defaultPathMap };

    // Excludem paginile cu getServerSideProps de aici
    delete filteredPathMap["/"];
    delete filteredPathMap["/home"];
    delete filteredPathMap["/services"];
    delete filteredPathMap["/news"];

    return filteredPathMap;
  },
});
