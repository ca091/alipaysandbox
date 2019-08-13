const path = require('path');
const express = require('express');
const router = express.Router();
const Pay = require('../alipay/pay.js')

router.get('/pay', async (req, res) => {
  try {
    // let link = await Pay.payLink()
    // res.redirect(link)
    let form = await Pay.payForm()
    res.send(form)
  } catch (e) {
    console.warn(error)
    res.end('pay fail')
  }
});

router.get('/notify', async (req, res) => {
  try {
    console.log(req)
    res.send('get notify')
  } catch (e) {
    console.warn(error)
    res.end('pay fail')
  }
});

module.exports = router