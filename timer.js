let timeout = setTimeout(() => {
    console.log('1.5초 후 실행');
}, 1500);

let interval = setInterval(() => {
    console.log('1초마다 실행');
}, 1000);

const im = setImmediate(() => console.log('즉시 실행'));
//이벤트 루프에 보내서 즉시 실행할 것으로 넣어줌 setTimeout을 0으로 할 필요x

//timeout과 interval 변수에 대입

// clearTimeout(timeout);
// //timeout 초기화
// clearInterval(interval);
// //interval 초기화

timeout = setTimeout(() => {
    console.log('Not working');
}, 3000);

setTimeout(() => {
    clearTimeout(timeout);
    clearInterval(interval);
}, 2500);
