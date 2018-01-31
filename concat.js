const fs = require('fs')

let basePath = process.argv[2];
let output = process.argv[3];
let sourceFolder = process.argv[4];

let content = fs.readFileSync(basePath + '/devsources.MF', {encoding: 'utf-8'})

let src = content.split('\n')
                 .filter(file => file.trim().length > 0 && !file.endsWith('.ngsummary.js'));
                              
let sourcePath = basePath.replace(sourceFolder, '');

let code = '';
src.forEach(file => {
  code += fs.readFileSync(`${sourcePath}${file}`, {encoding: 'utf-8'}) + '\n\n';
});

fs.writeFileSync(output, code, 'utf8');
