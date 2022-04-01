const { createProxyMiddleware } = require('http-proxy-middleware')

const proxy = {
  target: 'https://jsbbvk.files.wordpress.com',
  changeOrigin: true,
}

module.exports = function (app) {
  app.use('/2022', createProxyMiddleware(proxy))
}
