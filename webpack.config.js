const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
//const PurifyPlugin = require('@angular-devkit/build-optimizer').PurifyPlugin;
const webpack = require('webpack');

console.log('STARTING ' + __dirname);

const entryPoint = `${__dirname}/bazel-out/host/bin/src/apps/demo/prod_source.es6/angular_samples/src/apps/demo/main.js`;

const output = process.argv[5];

console.log('OUTPUT ' + output);

console.log('ENTRY POINT ' + entryPoint);

module.exports = {
  entry: entryPoint,
  output: {
    filename: output
  },

  module: {
    // rules: [
    //   {
    //     test: /\.js$/,
    //     loader: '@angular-devkit/build-optimizer/webpack-loader',
    //     options: {
    //       sourceMap: false
    //     }
    //   }
    // ]
  },

  resolve: {
    alias: {
      'rxjs': 'rxjs/_esm5',
      'angular_samples/src/apps/demo': `${__dirname}/bazel-out/host/bin/src/apps/demo/prod_source.es6/angular_samples/src/apps/demo`
    }
  },

  plugins: [
    //new webpack.optimize.ModuleConcatenationPlugin(),
    // new UglifyJsPlugin({
    //   beautify: false, 
    //   output: {
    //     comments: false
    //   }, 
    //   mangle: {
    //     screw_ie8: true
    //   }, 
    //   compress: {
    //     screw_ie8: true,
    //     warnings: false,
    //     conditionals: true,
    //     unused: true,
    //     comparisons: true,
    //     sequences: true,
    //     dead_code: true,
    //     evaluate: true,
    //     if_return: true,
    //     join_vars: true,
    //     negate_iife: false,
    //     pure_getters: true,
    //     passes: 3
    //   },
    // }),
    //new PurifyPlugin()
  ]
}