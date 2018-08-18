const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside: {
        inside: {
            key: 'value',
        },
    },
};
const b = () => {
    console.trace('error trace');//어떤 함수 거쳐갔는지 알아내는 법
}
const a = () => {
    b();
}
a();

console.time('전체 시간');
console.log('평병한 로그');
console.log(string, number, boolean);
console.error('error 메세지 담김');
console.timeEnd('전체 시간');
//console.time , timeEnd는 인자가 같아야 그 사이의 시간을 잰다.
console.dir(obj, { colors: true, depth: 2});