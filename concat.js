const fs = require('fs')

const workspace = process.argv[4];

let basePath = process.argv[2];

const start = new Date();

let content = fs.readFileSync(basePath + '/devsources.MF', {encoding: 'utf-8'})

let files = content.split('\n');

let src = files.filter(file => file.trim().length > 0
                               && !file.endsWith('.ngsummary.js'));
                              
let sourcePath = process.argv[2].replace('angular_samples/src/apps/demo', '');

let code = '';
src.forEach(file => {
   let content = fs.readFileSync(`${sourcePath}${file}`, {encoding: 'utf-8'})
   code += '\n\n' + content;
});


fs.writeFileSync(process.argv[3], code, 'utf8');
let end = new Date();
console.log(`bundled JS in ${end - start}ms. Last bundled ${end}`);