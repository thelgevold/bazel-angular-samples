const webpack = require('webpack');
const PurifyPlugin = require('@angular-devkit/build-optimizer').PurifyPlugin;
const es2015Root = `${__dirname}/bazel-out/host/bin/src/apps/demo/prod_source.es6/angular_samples/src/apps/demo`;
const output = process.argv[5];

module.exports = {
  entry: `${es2015Root}/main.js`,
  output: {
    filename: output
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        //TODO resolve this from Bazel node_modules
        loader: `${__dirname}/node_modules/@angular-devkit/build-optimizer/webpack-loader`,
        options: {
          sourceMap: false
        }
      } 
    ]
  },

  resolve: {
    alias: {
      'angular_samples/src/apps/demo': `${es2015Root}`
    }
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new PurifyPlugin()
  ]
}