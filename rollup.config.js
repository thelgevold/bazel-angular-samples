const rollup = require('rollup');
const nodeResolve = require('rollup-plugin-node-resolve');

const base = `${__dirname}/bazel-out/host/bin/src/apps/demo/prod_source.es6/angular_samples/src`;
const main = `${base}/apps/demo/main.js`;

const baseRxJs = `${__dirname}/bazel-out/host/bin/src/apps/demo/prod_source.es6/rxjs/`;


  
  class ResolveFESM2015 {
    
    resolveId(importee, importer) {
      if(importee.startsWith('@angular')) {
        const pkg = importee.replace('@angular', '');
        return `${__dirname}/node_modules/${importee}/esm2015/${pkg}.js`;
      }

      if (importee.startsWith('rxjs')) {
        let esm = importee.replace('rxjs/', '');
        console.log(`${baseRxJs}${esm}.js`);
        return `${baseRxJs}${esm}.js`;
      }
    }
  }


class NormalizePaths {
  resolveId(importee, importer) {
    const absolutePath = ['angular_samples/src', 'src'];

    for (let i = 0; i < absolutePath.length; i++) {
      if (importee.startsWith(absolutePath[i])) {
        return `${base}${importee.replace(absolutePath[i], '')}.js`;
      }
    }
  }
}

export default {
  output: {format: 'iife'},
  input: [main

  ],
  experimentalCodeSplitting: true,
  experimentalDynamicImport: true,
  plugins:
      [
        new ResolveFESM2015(), 
        new NormalizePaths(),
        nodeResolve({jsnext: true, module: true}),
      ]

}