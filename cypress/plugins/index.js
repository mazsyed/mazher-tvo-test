const mochaAwesome = require('cypress-mochawesome-reporter');

module.exports = (on, config) => {
  mochaAwesome.install(on, config);
  return config;
};
