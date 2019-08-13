const Pay = require('./pay.js')

Pay.payForm().catch(error => console.warn(error))
// Pay.payLink().catch(error => console.warn(error))