const util = require('util');
const crypto = require('crypto');

const dontuseme = util.deprecate((x, y) => {
    console.log(x + y);
}, 'This function will be deprecated 2018 12 31');
//deprecate 지원이 조만간 중단될 메서드임을 알려줌

dontuseme(1, 2);//실행은 되나 경고 메세지 발생
//API 만들 때 거의 사용됨

const randomBytesPromise = util.promisify(crypto.randomBytes);
const pbkdf2Promise = util.promisify(crypto.pbkdf2);
randomBytesPromise(64)
    .then((buf) => {
        const salt = buf.toString('base64');
        return pbkdf2Promise('password', salt, 10000, 64, 'sha512');
    })
    .then((key) => {
        console.log('password', key.toString('base64'));
    })
    .catch((err) => {
        console.error(err);
    });

    (async () => {
        const buf = await randomBytesPromise(64);
        const salt = buf.toString('base64');
        const key = await pbkdf2Promise('password', salt, 10000, 64, 'sha512');
        console.log('password', key.toString('base64'));
    })();