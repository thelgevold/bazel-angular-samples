const webpack = require('webpack');

const es2015Root = `${__dirname}/bazel-out/host/bin/src/apps/demo/prod_source.es6/angular_samples/src/apps/demo`;
const output = process.argv[5];

module.exports = {
  entry: `${es2015Root}/main.js`,
  output: {
    filename: output
  },

  resolve: {
    alias: {
      'angular_samples/src/apps/demo': `${es2015Root}`
    }
  },
}