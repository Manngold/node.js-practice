console.log(global);
//global 전역객체가 나오고 수 많은 속성들이 보여진다.
global.message = 'hello';

module.exports = () => global.message;
//모든 파일에서 접근이 가능하므로 보안상 위험
