const EventEmitter = require('events');

const myEvent = new EventEmitter();
//이제부터 이벤트를 커스터마이즈 할 수 있다.

let visitor = 0;

myEvent.addListener('visit', () => {
    visitor++;
    console.log(`Visitor is coming total visitors is ${visitor}`);
});

myEvent.on('end', () => {//addListener와 같은 기능이므로 타이핑이 적은 이걸 더 선호
    visitor--;
    console.log(`Visitor is out total visitors is ${visitor}`);
});

myEvent.on('end', () => {
    console.log('Bye~');
});//이벤트 리스너를 여러개 달 수도 있다.

myEvent.once('dailyEvent', () => {
    console.log('You never see again');
});//한 번만 실행되는 이벤트
myEvent.emit('visit');//이벤트를 발생시킴
myEvent.emit('visit');
myEvent.emit('visit');
myEvent.emit('end');
myEvent.removeAllListeners('dailyEvent');//이벤트 리스너 삭제
myEvent.emit('dailyEvent');//실행 안됨
console.log(myEvent.listenerCount('visit'));//이벤트 리스너 몇개니