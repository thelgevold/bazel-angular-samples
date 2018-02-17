const rollup = require('rollup');
const nodeResolve = require('rollup-plugin-node-resolve');

const workspace = process.argv[11];
const sourceRoot = process.argv[13];

const baseSrc = `${__dirname}/${process.argv[17]}`;
const baseRxJs = `${__dirname}/${process.argv[19]}`;

const entryPoint = `${baseSrc}/${process.argv[15]}`;

const modules = [
  'airplane/team0/team0.module',
  'airplane/team1/team1.module',
  'airplane/team2/team2.module',
  'airplane/team3/team3.module',
  'airplane/team4/team4.module',
  'airplane/team5/team5.module',
  'airplane/team6/team6.module',
  'airplane/team7/team7.module',
  'airplane/team8/team8.module',
  'airplane/team9/team9.module'
].map(m => `${baseSrc}/apps/demo/${m}.ngfactory.js`)

// Resolves Angular and RxJs to ESM distros
class ResolveFESM2015 {
  
  resolveId(importee, importer) {
    if(importee.startsWith('@angular')) {
      const pkg = importee.replace('@angular', '');
      return `${__dirname}/node_modules/${importee}/esm2015/${pkg}.js`;
    }

    if (importee.startsWith('rxjs')) {
      const esm = importee.replace('rxjs/', '');
      return `${baseRxJs}/${esm}.js`;
    }
  }
}

// Normalize import paths in ngfactories
class NormalizePaths {
  resolveId(importee, importer) {
    const absolutePath = [`${workspace}/${sourceRoot}`, sourceRoot];

    for (let i = 0; i < absolutePath.length; i++) {
      if (importee.startsWith(absolutePath[i])) {
        return `${baseSrc}${importee.replace(absolutePath[i], '')}.js`;
      }
    }
  }
}

export default {
  input: [entryPoint, ...modules],
  experimentalCodeSplitting: true,
  experimentalDynamicImport: true,
  plugins: [
    new ResolveFESM2015(), 
    new NormalizePaths(),
    nodeResolve({jsnext: true, module: true}),
  ]
}