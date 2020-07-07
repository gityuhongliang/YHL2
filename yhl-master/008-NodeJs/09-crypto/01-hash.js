const crypto =require('crypto');

// const hash =crypto.createHash('md5');
const hash =crypto.createHash('sha256');

hash.update('12345678');
console.log(hash.digest('hex'));

console.log('123456');
