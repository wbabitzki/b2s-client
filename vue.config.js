module.exports = {
  configureWebpack: {
    devtool: 'source-map',
    devServer: {
      clientLogLevel: 'info',
      watchOptions: {
          poll: true
      }
  }
  },
  publicPath: '/b2s'
}