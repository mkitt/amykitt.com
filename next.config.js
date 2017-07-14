/* eslint-disable global-require, comma-dangle, import/no-extraneous-dependencies */
const webpack = require('webpack')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load()
}

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.DOMAIN': JSON.stringify(process.env.DOMAIN || 'http://localhost:3000'),
      })
    )
    return config
  }
}
