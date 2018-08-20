console.log(__filename);//현재 파일 경로
console.log(__dirname);//현재 파일이 들어있는 경로
console.log(process.cwd());//node process가 실행되는 위치
console.log(process.execPath);//node 위치

for (let i = 0; i < 100000; i++){
    console.log(i);
    process.exit();//종료
}//0만 찍혀요