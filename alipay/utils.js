const AlipaySdk = require('alipay-sdk').default
const Config = require('./config.js')
const fs = require('fs')
const path = require('path')

let alipaySdkInstance = null

function getAlipaySdkInstance() {
  if (!alipaySdkInstance) {
    alipaySdkInstance = new AlipaySdk({
      appId: Config.appId,
      gateway: Config.GATE_WAY,
      privateKey: fs.readFileSync(path.resolve(__dirname, './private-key.pem'), 'ascii'),
      alipayPublicKey: fs.readFileSync(path.resolve(__dirname, './public-key.pem'), 'ascii'),
      signType: 'RSA2',
      camelcase: true,
    });
  }
  return alipaySdkInstance
}

module.exports = {
  getAlipaySdkInstance
}