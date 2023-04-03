const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  screenshots: false,
  e2e: {
    experimentalRunAllSpecs: true,
    watchForFileChanges: true,
    chromeWebSecurity: false,
    setupNodeEvents (on, config) {
      // implement node event listeners here
    },
  },
})
