const { defineConfig } = require("cypress");

module.exports = defineConfig({
  trashAssetsBeforeRuns: true,
  e2e: {
    baseUrl: 'https://www.amaysim.com.au',
    specPattern: 'cypress/e2e/**/*.spec.cy.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
