const AlipaySdk = require('alipay-sdk').default
const Config = require('./config.js')
const fs = require('fs')
const path = require('path')

let alipaySdkInstance = null

function getAlipaySdkInstance() {
  if (!alipaySdkInstance) {
    alipaySdkInstance = new AlipaySdk({
      appId: Config.appId,
      privateKey: fs.readFileSync(path.resolve(__dirname, './private-key.pem'), 'ascii'),
    });
  }
  return alipaySdkInstance
}

module.exports = {
  getAlipaySdkInstance
}