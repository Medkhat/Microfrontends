const HtmlWebpackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
  mode: "development",
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "cart",
      filename: "remoteEntry.js",
      exposes: {
        "./CartShow": "./src/index.js",
      },
      shared: ["faker"], // Shared modules between sub apps
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
}

// shared: {
//   faker: {
//     singleton: true, // We only want to load up one single copy of faker no matter what
//   },
// }
