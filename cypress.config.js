const { defineConfig } = require("cypress");
module.exports = defineConfig({
  viewportWidth: 1024,
  viewportHeight: 768,
})
module.exports = defineConfig({
  e2e: {
    experimentalSkipDomainInjection: [
      '*.tvolearn.com',
      '*.force.com',
    ],
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //require('cypress-mochawesome-reporter/plugin')(on);

    },
  },
});
