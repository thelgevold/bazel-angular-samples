const map = {
    'lazy-loaded-tree-view.module.ngfactory.js': 'lazy-loaded-tree-view',
    'survey.module.ngfactory.js': 'survey',
    'tree-view.module.ngfactory.js': 'tree-view',
    'spreadsheet.module.ngfactory.js': 'spreadsheet'    
  }

function mapUrl(url) {
  var file = url.address.split('/');
  var mod = file[file.length - 1];
  var match = map[mod];

  if(match) {
    url.name = url.address = ['src/apps/demo/shared-components', match, mod].join('/');
  }       
}

module.exports.fetch = function (url, fetch) {
  mapUrl(url);
 
  return fetch(url);
}