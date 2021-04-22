const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

const path = require("path");

module.exports = {
  output: {
    filename: "app.bundle.js",
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
    liveReload: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new WebpackPwaManifestPlugin({
      filename: "manifest.webmanifest",

      name: "Petgram - Tu app de fotos de mascotas",
      shortname: "Petgram 🐱‍👤",
      description: "Con Petgram puedes encontrar fotos de animales domesticos",
      orientation: "portrait",
      display: "standalone",
      start_url: "/",
      scope: "/",
      background_color: "#456BD9",
      theme_color: "#456BD9",
      icons: [
        {
          src: path.resolve(__dirname, "src/assets/icon.png"),
          sizes: [96, 128, 144, 192, 256, 384, 512],
          purpose: "maskable any",
          destination: path.join("Icons"),
          ios: true,
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: "service-worker.js",
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 5000000,
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            "https://res.cloudinary.com|images.unplash.com"
          ),
          handler: "CacheFirst",
          options: {
            cacheName: "images",
          },
        },
        {
          urlPattern: new RegExp(
            "https://petgram-server-sjav-sergeavila7.vercel.app"
          ),
          handler: "NetworkFirst",
          options: {
            cacheName: "api",
          },
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
