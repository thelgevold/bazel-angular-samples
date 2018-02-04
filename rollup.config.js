const rollup = require('rollup');
const nodeResolve = require('rollup-plugin-node-resolve');

const es2015 = process.argv[9];
const workspace = process.argv[11];
const sourceRoot = process.argv[13];

const base = `${__dirname}/${es2015}/${workspace}/${sourceRoot}`;

const entryPoint = `${base}/apps/demo/main.js`;

const baseRxJs = `${__dirname}/${es2015}/rxjs/`;

const modules = [
  'shared-components/spreadsheet/spreadsheet.module',
  'shared-components/survey/survey.module',
  'shared-components/tree-view/tree-view.module',
  'shared-components/lazy-loaded-tree-view/lazy-loaded-tree-view.module'
].map(m => `${base}/apps/demo/${m}.ngfactory.js`)

// Resolves Angular and RxJs to ESM distros
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
    const absolutePath = [`${workspace}/${sourceRoot}`, sourceRoot];

    for (let i = 0; i < absolutePath.length; i++) {
      if (importee.startsWith(absolutePath[i])) {
        return `${base}${importee.replace(absolutePath[i], '')}.js`;
      }
    }
  }
}

export default {
  output: {format: 'iife'},
  input: [entryPoint,
          ...modules
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