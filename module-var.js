const odd = [1, 3, 5, 7, 9];
const even = [2, 4, 6, 8, 10];

const checkOddOrEven = (array) => {
    array.forEach(element => {
        if(element % 2){
            console.log('odd');
        }
        else console.log('even');
    });
}

checkOddOrEven(odd);

module.exports = {
    odd,
    even,
    checkOddOrEven,
};
//다른 파일에서 사용 가능
//exports도 객체속성으로 담을 수 있다
//exports.odd = odd;로 exports가 가능하다
