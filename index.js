if(process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/help.min.js');
} else {
  module.exports = require('./dist/help.js');
}