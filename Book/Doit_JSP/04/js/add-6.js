// 139P
//선언함수
var add = function add() {
  return `실행문`;
};
//var의 호이스팅에서 변수는 인지는 하고 undefined, 함수는 제대로 인지됨

// let sum = function(a, b){
//   let result = a + b; //실행문
//   return result;
// };

//익명함수의 기본형
// let hi = function () {
//   return `안녕하세요`;
// };

// function을 제거하고  => 를 넣는다
// let hi = () => {return `안녕하세요`}

// 함수가 간단한 형식, return만 있다면, return도 생략, {} 생략
let hi = () => `안녕하세요`;

document.write(`<p style="font-size:18px; color:blue;">익명함수의 기본형<br></p>
    <p style="text-align:left; font-size:16px;color:blue;">
    let hi(변수) = function《함수명생략》()){<br>
    return \`return 하고자 하는 것(ex.안녕하세요?)\`;<br>}<br></p>
    에서 function을 제거하고  => 를 넣고,<br>한줄명령내의 return 값과 {}도 삭제가능하다.<br><br> 이제 변경된<br>let hi = () => \`안녕하세요?\`;를 입력하고<br>
    hi(); 를 콜링하면<br><br>▶ \'`+ hi() + `\' 가 출력된다.<br><br>`);

// 매개변수가 1개인 화살표 함수는 ()생략 가능
// let hi2 = function(user){
//   console.log(`${user}님 안녕`)
// }
// let hi2 = user => console.log(`${user}님 안녕`);
let hi2 = (user) => document.write('let hi2 = (user) => document.write(`${user}님 안녕`); 작성 후, <br>hi2(\'바보\');를 콜링하면<br> user에 \'바보\'가 대입되어 함수 실행<br>▶ ' + `${user}님 안녕`);
hi2('바보');

// 매개변수가 2개이상이면 걍씀
// let sum = function(a,b){
//   return a+b
// }
// let sum = (a, b) => a + b;
// console.log(`${sum(10, 20)}계산`);


// let sum = function (a, b) {
//   let sum = '계산';
//   console.log(`${sum}해주세요`);
//   return a + b;
// };
let sum = (a, b) => {
  let sum = '계산';
  console.log(`${sum}해주세요`);
  return a + b;
};

// 축약형으로 작성하는 부분에서 무조건 가능한 케이스만 알아두고, 나머지는 function 떼고 화살표를 넣는데에만 의의를 두는게 낫다