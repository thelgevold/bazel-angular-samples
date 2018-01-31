module.exports = {
  
  files: ["./*.{html,htm,css,js}"],
  port: 9000,
  baseDir: '.',
  server : {
    middleware : { 1 : require('compression')() }
  },
  
  open: false  
};  