const rollup = require('rollup');
const nodeResolve = require('rollup-plugin-node-resolve');

const base = `${__dirname}/bazel-out/host/bin/src/apps/demo/prod_source.es6/angular_samples/src`;

const main = `${base}/apps/demo/main.js`;

// lazy modules
const spreadsheet = `${base}/apps/demo/shared-components/spreadsheet/spreadsheet.module.ngfactory.js`;
const form = `${base}/apps/demo/shared-components/survey/survey.module.ngfactory.js`;
const treeview = `${base}/apps/demo/shared-components/tree-view/tree-view.module.ngfactory.js`;
const lazyTreeview = `${base}/apps/demo/shared-components/lazy-loaded-tree-view/lazy-loaded-tree-view.module.ngfactory.js`;

const baseRxJs = `${__dirname}/bazel-out/host/bin/src/apps/demo/prod_source.es6/rxjs/`;

// Reolves Angular and RxJs to ESM distros
class ResolveFESM2015 {
  
  resolveId(importee, importer) {
    if(importee.startsWith('@angular')) {
      const pkg = importee.replace('@angular', '');
      return `${__dirname}/node_modules/${importee}/esm2015/${pkg}.js`;
    }

    if (importee.startsWith('rxjs')) {
      const esm = importee.replace('rxjs/', '');
      return `${baseRxJs}${esm}.js`;
    }
  }
}

// Normalize import paths in ngfactories
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
  input: [main,
          spreadsheet,
          treeview,
          form,
          lazyTreeview
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