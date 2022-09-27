const path = require("path");
/**自定义 JSON 模块 parser */
const toml = require("toml");
const yaml = require("yamljs");
const json5 = require("json5");
/**设置 HtmlWebpackPlugin管理输出*/
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  /** 仅用于开发环境 */
  mode: "development",
  entry: {
    index: {
      import: "./src/index.js",
      /**共享模块 */
      // dependOn: "shared",
    },
    // another: {
    //   import: "./src/another-module.js",
    //   // dependOn: "shared",
    // },
    // shared: "lodash",
    // print: "./src/print.js",
  },
  /** 使用source map */
  devtool: "inline-source-map",
  /**使用webpack-dev-server */
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Caching",
    }),
  ],
  output: {
    /**缓存 */
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    /**每次构建前清理输出文件夹 */
    clean: true,
    publicPath: "/",
  },
  optimization: {
    moduleIds: "deterministic",
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
    // splitChunks: {
    //   chunks: "all",
    // },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ["csv-loader"],
      },
      {
        test: /\.xml$/i,
        use: ["xml-loader"],
      },
      {
        test: /\.toml$/i,
        type: "json",
        parser: {
          parse: toml.parse,
        },
      },
      {
        test: /\.yaml$/i,
        type: "json",
        parser: {
          parse: yaml.parse,
        },
      },
      {
        test: /\.json5$/i,
        type: "json",
        parser: {
          parse: json5.parse,
        },
      },
    ],
  },
};
