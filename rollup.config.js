const rollup = require('rollup');
const nodeResolve = require('rollup-plugin-node-resolve');

const workspace = process.argv[11];
const sourceRoot = process.argv[13];

const baseSrc = `${__dirname}/${process.argv[19]}`;
const baseRxJs = `${__dirname}/${process.argv[21]}`;

const entryPoint = `${baseSrc}/${process.argv[17]}`;

const modules = `${process.argv[15]}`.split(',')
                .filter(m => m) 
                .map(m => `${baseSrc}/${m}.ngfactory.js`);

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