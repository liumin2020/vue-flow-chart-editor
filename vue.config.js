module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-flow-chart-editor/' : '/',
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
}
