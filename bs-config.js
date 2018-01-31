module.exports = {
  server : {
    middleware : { 1 : require('compression')() }
  },
  open: false
};