const fs = require('fs');
fs.readFile('./readme.txt', (err, data) => {
    if (err){
        throw err;
    }
    console.log(data);//컴터가 알아듣는 코드
    console.log(data.toString());//사람이 볼 수 있는 코드
});

fs.writeFile('./readme.txt', '글을 써주세요', (err, data) => {
    if(err){
        throw err;
    }
    fs.readFile('./readme.txt', (err, data) => {
        if(err){
            throw err;
        }
        console.log(data.toString());
    });
});//비동기이므로 순서가 일정하지 않다. 일정하게 하려면 callback hell로 구현가능
//지저분하니깐 동기로 실행한다.

let data = fs.readFileSync('./readme.txt');
console.log(`첫번째 읽기 ${data}`);
data = fs.readFileSync('./readme.txt');
console.log(`두번째 읽기 ${data}`);
data = fs.readFileSync('./readme.txt');
console.log(`세번째 읽기 ${data}`);
//깔끔하긴한데 블로킹이라 차라리 콜백헬이 낫다

