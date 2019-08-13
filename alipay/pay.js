const AlipayFormData = require('alipay-sdk/lib/form.js').default
const Utils = require('./utils.js')
const Config = require('./config.js')

async function payForm() {
  const alipaySdk = Utils.getAlipaySdkInstance()
  const formData = new AlipayFormData();

  formData.addField('notifyUrl', Config.notifyUrl);
  formData.addField('bizContent', {
    outTradeNo: '1565676326609',
    productCode: 'FAST_INSTANT_TRADE_PAY',
    totalAmount: '0.01',
    subject: '商品',
    body: '商品详情',
  });

  const result = await alipaySdk.exec(
      'alipay.trade.page.pay',
      {},
      { formData: formData },
  );

  // result 为 form 表单
  console.log(result);
  return result
}

async function payLink() {
  const alipaySdk = Utils.getAlipaySdkInstance()
  const formData = new AlipayFormData();
  // 调用 setMethod 并传入 get，会返回可以跳转到支付页面的 url
  formData.setMethod('get');

  formData.addField('notifyUrl', Config.notifyUrl);
  formData.addField('bizContent', {
    outTradeNo: '1565676326609',
    productCode: 'FAST_INSTANT_TRADE_PAY',
    totalAmount: '0.01',
    subject: '商品',
    body: '商品详情',
  });

  const result = await alipaySdk.exec(
      'alipay.trade.page.pay',
      {},
      { formData: formData },
  );

  // result 为可以跳转到支付链接的 url
  console.log(result);
  return result
}

module.exports = {
  payForm,
  payLink
}