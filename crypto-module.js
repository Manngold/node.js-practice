const crypto = require('crypto');

console.log(crypto.createHash('sha512').update('password').digest('base64'));
//crypto를 모듈을 불러와 sha512알고리즘을 이용하여 패스워드를 업데이트하고 base64 방식으로 출력한다.
//복호화되지 않는 문자열로 생성이 된다. (단방향 암호화)

//복호화란 암호화의 반대말로 데이터를 원래대로 복원하는 것

crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');
    console.log('salt', salt);
    crypto.pbkdf2('password', salt, 100000, 64, 'sha512', (err, key) => {
        console.log('password', key.toString('base64'));
    });
});//hash 충돌 공격을 어렵게 하기 위해 사용
