const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// webpack 中所有的配置信息都应该写在module.exports中
module.exports = {
  // 指定入口文件
  entry: "./src/index.ts",

  // 指定打包文件所在目录
  output: {
    // 指定打包文件的目录
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    // 告诉webpack不适用箭头函数
    environment: {
      arrowFunction: false
    }
  },
  mode: "production",

  // 指定 webpack 打包时要使用模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        // test指定的是规则生效的文件
        test: /\.ts$/,
        // 要使用的loader
        use: [
          // 配置babel
          {
            // 指定加载器
            loader: "babel-loader",
            // 设置babel
            options: {
              // 设置预定义的环境
              presets: [
                [
                  // 指定环境的插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      chrome: "88",
                      ie: 11
                    },
                    // 指定corejs的版本
                    corejs: "3",
                    // 使用corejs的方式"usage" 表示按需加载
                    useBuiltIns: "usage",
                  },
                ],
              ],
            },
          },
          "ts-loader",
        ],
        // 要排除的文件
        exclude: /node_modules/,
      },
    ],
  },
  // 配置webpack插件
  plugins: [
    // 不使用CleanWebpackPlugin仅会替换打包后的文件，不会移除非相关文件
    // 使用CleanWebpackPlugin会先清空dist目录然后再放打包后的文件
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      // title: '这是一个自定义的title'
      template: "./src/index.html",
    }),
  ],
  // 用来设置引用模块
  resolve: {
    extensions: [".ts", ".js"],
  },
};
