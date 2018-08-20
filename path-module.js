const path = require('path');

console.log(path);
console.log(path.sep);//경로 구분자
console.log(path.delimiter);//환경변수 구분자

console.log(path.dirname(__filename));//path-module.js의 경로
console.log(path.extname(__filename));//확장자
console.log(path.basename(__filename));//파일 이름

console.log(path.parse(__filename));//parse를 통해서 구분시켜준다
console.log(path.format(path.parse(__filename)));
//파싱된 요소를 합쳐줌

console.log(path.normalize('C://users\\\jse48//path.js'));
//오타난 경로도 제대로 수정해줌
console.log(path.isAbsolute('C://'));//절대경로니?
//절대경로 -> / 상대경로 -> ./(현재 폴더) , ../(부모 폴더)
console.log(path.relative('C:/Users/jsw48/Desktop', 'C:/Users'));
//첫번째 인자가 두번째 인자 위치로 가려면 ..\.. -> 상위로 두 번 가라는 뜻

console.log(path.join(__dirname, '..', '..', '/Dev', '.', 'node.js-practice'))//절대 경로 무시하고 합쳐줌
//해설 - 부모 폴더로 두 번 올라가서 Dev 폴더 들어간 뒤 현재 폴더에서 node.js-practice 폴더로 들어감

console.log(path.resolve(__dirname, '..', '..', '/Dev', '.', 'node.js-practice'));//절대 경로를 고려하고 합친다.
