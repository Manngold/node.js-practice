const url = require('url');

const URL = url.URL;
const myURL = new URL('https://www.youtube.com/watch?v=m8C37nS8zh8&list=PLcqDmjxt30RsbFOspFG3EsxMwhFSnGFLw&index=23');
console.log(myURL);//구성요소
console.log(url.format(myURL));//합쳐줌
console.log(url.parse('https://www.youtube.com/watch?v=m8C37nS8zh8&list=PLcqDmjxt30RsbFOspFG3EsxMwhFSnGFLw&index=23'));//파싱
//기존 방식 url.parse는 호스트가 없을 때도 사용 가능
//WHATWG방식 (url.URL)은 search 처리가 편리
console.log(myURL.searchParams);//요론고 편함 + 메서드들이 많음
//getAll get => 가져오기 has => 있니?
//keys => key들을 출력 values => values들 출력

myURL.searchParams.append('filter', 'ES5');
myURL.searchParams.append('filter', 'ES6');
console.log(myURL.searchParams);

myURL.searchParams.set('filter', 'ECMAScript2015');
console.log(myURL.searchParams);
//set과 append 차이는 append는 추가 set은 기존 값 지우고 새로 추가

console.log(myURL.searchParams.toString());
//string으로 변환시켜준다

/*
/hello?page=10 처럼 풀 주소가 아니라 도메인이 생략된 경우
url.parse를 사용
*/