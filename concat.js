const rollup = require('rollup');
const nodeResolve = require('rollup-plugin-node-resolve');

const es2015 = process.argv[9];
const workspace = process.argv[11];
const sourceRoot = process.argv[13];

const base = `${__dirname}/${es2015}/src/apps/demo/airplane`;

const entryPoint = `${base}/apps/demo/main.js`;

const baseRxJs = `${__dirname}/bazel-out/host/bin/src/apps/demo/prod_source.es6/rxjs/`;


class ResolveFESM2015 {
  
  resolveId(importee, importer) {
    if (importee.startsWith('rxjs')) {
      const esm = importee.replace('rxjs/', '');
      return `${baseRxJs}${esm}.js`;
    } 
  }
}
 
// Normalize import paths in ngfactories
class NormalizePaths {
  resolveId(importee, importer) {
    const absolutePath = [`angular_samples/src/apps/demo/airplane`, 'src/apps/demo/airplane'];

    if (importee.startsWith(`angular_samples/src/apps/demo/airplane`)) {
      return `${base}${importee.replace(`angular_samples/src/apps/demo/airplane`, '')}.js`;
    }

    if (importee.startsWith('src/apps/demo/airplane')) {
      return `${base}${importee.replace('src/apps/demo/airplane', '')}.js`;
    }
  }
}

const inputOptions = {input: `${base}/team0/team0.module.ngfactory.js`,
                      treeshake: false,
                      plugins: [
                        new ResolveFESM2015(), 
                        new NormalizePaths(),
                        nodeResolve({jsnext: true, module: true})
                      ]                     
};
const outputOptions = { 
                       format: "es", 
                       file: process.argv[15],
                       sourcemap: false
                      };
 
async function build() {
  const bundle = await rollup.rollup(inputOptions);

  await bundle.generate(outputOptions);

  await bundle.write(outputOptions);
}

build();