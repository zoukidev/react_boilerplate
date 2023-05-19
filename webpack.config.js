const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    // exclude node_modules
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      // Tailwind CSS
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      // // Bootstrap
      // {
      //   test: /\.(scss)$/,
      //   use: [
      //     {
      //       // Adds CSS to the DOM by injecting a `<style>` tag
      //       loader: 'style-loader'
      //     },
      //     {
      //       // Interprets `@import` and `url()` like `import/require()` and will resolve them
      //       loader: 'css-loader'
      //     },
      //     {
      //       // Loader for webpack to process CSS with PostCSS
      //       loader: 'postcss-loader',
      //       options: {
      //         postcssOptions: {
      //           plugins: () => [
      //             autoprefixer
      //           ]
      //         }
      //       }
      //     },
      //     {
      //       // Loads a SASS/SCSS file and compiles it to CSS
      //       loader: 'sass-loader'
      //     }
      //   ]
      // },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  // pass all js files through Babel
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
};
