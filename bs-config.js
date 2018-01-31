module.exports = {
  server : {
    middleware : { 1 : require('compression')() }
  },
  "files" : [
    "./**/*.html",
    "./**/*.css",
    "./**/*.js"
  ],
  open: false
};