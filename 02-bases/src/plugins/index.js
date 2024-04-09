const { getAgePlugin } = require('./get-age.plugin')
const { http } = require('./http-client.plugin')
const buildLogger = require('./logger.plugin')

module.exports = {
  getAgePlugin,
  http,
  buildLogger
}
