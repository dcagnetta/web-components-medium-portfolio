const path = require("path");

var mode = process.env.NODE_ENV || 'production';

module.exports = {
  entry: "./src/main.ts",
  mode: mode,
  devtool: (mode === 'development') ? 'inline-source-map' : false,
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 8080,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  }
};
