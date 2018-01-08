const offline = require('poi-preset-offline')

module.exports = options => ({
  html: {
    template: './src/index.html'
  },
  presets: [
    offline({
      pwa: './src/pwa.js'
    })
  ]
})
