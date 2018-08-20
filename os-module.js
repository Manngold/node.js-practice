const os = require('os');
console.log(os);//운영체제와 관련된 모듈

console.log(os.arch);
console.log(os.uptime());//운영체제가 실행된 시간
//process.uptime();은 노드가 실행되는 시간
console.log(os.hostname());
console.log(os.release());//컴 버전
console.log(os.homedir());
console.log(os.freemem());//free memory
console.log(os.totalmem());//total memory
console.log(os.cpus());//cpu info