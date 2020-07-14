/* eslint-disable */
const proxy = require('http-proxy-middleware')

// https://github.com/facebook/create-react-app/issues/5441
// https://github.com/facebook/create-react-app/issues/5587
module.exports = function(app) {
  app.use(
    proxy('/api', {
      target: 'http://cloudpharmacy.qa.medlinker.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  )
}
