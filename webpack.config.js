const path = require("path");

module.exports = {
  entry: "./source/main.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: "./dist"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
