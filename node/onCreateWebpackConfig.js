const WebpackWindiCSSPlugin = require("windicss-webpack-plugin").default;
const merge = require("defu").arrayFn;

const defaultOptions = {
  scan: {
    exclude: ["node_modules", ".git", "dist", "public", ".cache", ".temp"],
    transformCSS: "pre",
  },
};

module.exports = function onCreateWebpackConfig({ actions }, options) {
  actions.setWebpackConfig({
    plugins: [new WebpackWindiCSSPlugin(merge(options, defaultOptions))],
  });
};
