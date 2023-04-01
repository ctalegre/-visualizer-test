const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  screenshots: false,
  e2e: {
    setupNodeEvents (on, config) {
      // implement node event listeners here
    },
  },
})
