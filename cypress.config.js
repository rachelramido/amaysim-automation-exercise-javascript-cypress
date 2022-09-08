const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  trashAssetsBeforeRuns: true,
  pageLoadTimeout: 90000,
  defaultCommandTimeout: 15000,
  e2e: {
    baseUrl: 'https://www.amaysim.com.au',
    specPattern: 'cypress/e2e/**/*.spec.cy.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
