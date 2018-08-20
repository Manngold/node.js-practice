const crypto = require('crypto');

const cipher = crypto.createCipher('aes-256-cbc', 'key');
let result = cipher.update('password', 'utf8', 'base64');
result += cipher.final('base64'); //암호화 마무리
console.log(result);

const decipher = crypto.createDecipher('aes-256-cbc', 'key');
let result2 = decipher.update(result, 'base64', 'utf8');
result2 += decipher.final('utf8');//복호화 마무리
console.log(result2);