/*
데이터를 전송할 때, 기본적으로 조각을 낸 뒤 
buffer라는 저장소에 채워넣고 다 채워졌을 때 전송을 한다

버퍼링이란 말도 버퍼가 아직 다 차지 않아서 버퍼링이 있다 라고
말을 하는 것이다.

스트리밍 또한 계속해서 들어오는 데이터를 버퍼에 담아서 보내고
다시 버퍼를 만들어서 채운뒤 계속 보낸다

이미지 업로드 파일 업로드 할 때 사용된다
*/

const fs = require('fs');

const readStream = fs.createReadStream('./chunk.txt', { highWaterMark: 16});
const data = [];

readStream.on('data', (chunk) => {//data 이벤트가 발생할 때마다 chunk에 넣어서 보낸다
    data.push(chunk);//data 배열에 push해준다.
    console.log(chunk, chunk.length);
});

readStream.on('end', () => {//streamdata 전송이 끝났을 때, 발생 이벤트
    console.log(Buffer.concat(data).toString());//concat은 data배열의 chunk들을 합쳐준다
});

readStream.on('error', (err) => {//에러가 난 상황에 발생 이벤트
    console.log(err);
});

const writeStream = fs.createWriteStream('./chunk.txt');

writeStream.write('글을 씁니다.');
writeStream.write('또 쓴다');
writeStream.end();


writeStream.on('finish', () => {
    const editRead = fs.createReadStream('./chunk.txt', {highWaterMark: 16});

    editRead.on('data', (chunk) => {
        data.push(chunk);
    });
    
    editRead.on('end', () => {
        console.log(Buffer.concat(data).toString());
    });
});
//스트림은 버퍼의 흐름이기 때문에 여러개의 스트림을 이어 버퍼가 흘러가게 할 수 있다

const readPipe = fs.createReadStream('./pipe-read.txt');
const writePipe = fs.createWriteStream('./pipe-write.txt');
readPipe.pipe(writePipe);//복사라고 생각하면 된다.
//pipe()로 계속 이어나갈 수 있다. 
const newCopy = fs.copyFile('./pipe-read.txt', './pipe-write.txt', (err) => {
    console.log(err);
});