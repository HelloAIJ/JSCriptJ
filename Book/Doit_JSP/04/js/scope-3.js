// 전역변수 자유롭게 사용하는 법2
var hi = "hello";
// 전역 변수 선언
// hi = "hello";
// 전역 변수 선언

function change() {
  hi = "bye";
  // 재할당, 함수 안에서 전역 변수 수정 가능
  // var hi = "bye";
  // 신규선언
  // 변수의 값을 재할당 하려면 예약어를 떼야 함.
  // 그러나 붙여서 재할당을 시도하면? 밖의 hi와 함수 안의 hi는 동명이인임.
}
document.write(`var hi = "hello";   // 전역 변수 선언<br>
function change() {<br>
  hi = "bye";  // 함수 안에서 전역 변수 수정 가능<br>
  // var hi = "bye";<br>
  // 변수의 값을 재할당 하려면 예약어를 떼야 함. 그러나 붙여서 재할당을 시도하면?<br>
  밖의 hi와 함수 안의 hi는 동명이인임.<br>
}<br>

document.write(hi); // 처음 선언한 `);
document.write(hi);
// 처음 선언한 hello가 찍힌다
document.write(`가 찍힌다<br><br>`);
change();
// 함수콜링하여 실행했고, 안에서 변수가 바뀜
document.write(`var hi = "hello";<br>
function change() {<br>
  hi = "bye";<br>
  }<br>
change(); <br>로 change() 함수를 콜링하여 실행하면, 안에서 변수가 바뀌고<br>
다시 document.write(hi)를 실행하면 `);
document.write(hi);
// 밖에있는 hi변수를 찍고 있음. 
// 함수 안에서 바뀐변수가 밖의 hi에 영향을 미쳐 콘솔로 찍힘. bye
document.write(`가 찍힌다<br><br>`);

document.write(`<p>연습하기</p>`);

var introduce = "my name is";
function add() {
  introduce = "hello my name is";
}
document.write(`var introduce = "my name is";<br>
function add() {<br>
  introduce = "hello my name is";<br>
}<br>document.write(introduce);를 콜링하면 
`);
document.write(introduce);
document.write(`가 콜링<br><br>`);
add();
document.write(introduce);

// 연습!
// 함수를 하나 임의로 만들어 전역변수의 영향범위 확인하기
// 재할당, 재선언에 대해서 이해있는가? 확인.