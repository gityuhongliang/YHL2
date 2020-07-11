const crypto  = require('crypto');

const hmac =crypto.createHmac('sha256','yhl') 

hmac.update('123456');
console.log(hmac.digest('hex'))

//明文
console.log('123456')