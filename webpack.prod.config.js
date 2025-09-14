const path= require("path");
const HtmlWebpackPlugin= require("html-webpack-plugin");
const ESLintPlugin=require('eslint-webpack-plugin');
module.exports= {
   mode: "production",
   entry: "./src/index.js",
   output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
   },
   devtool: "eval-source-map",
   devServer: {
      watchFiles: ["./src/template.html"],
   },
   module: {
      rules: [
         {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
         },
         {
            test: /\.html$/i,
            loader: "html-loader",
         },
         {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
         },
      ],
   },
   plugin: [
      new HtmlWebpackPlugin({
         template: "./src/template.html",
      }),
      new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      emitWarning: true, 
      }),
   ],
};