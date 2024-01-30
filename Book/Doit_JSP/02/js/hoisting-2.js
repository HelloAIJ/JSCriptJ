// 56P
// let으로 호이스팅 막기(활동 범주 제한)
document.write(`오류 발생으로 js 동작안함 → document에서 값 확인 불가.<br>
console을 열어 확인하면<br><br> 
Uncaught ReferenceError: Cannot access 'y' before initialization at hoisting-2.js:6:15메세지 확인가능`);
let x = 10;
let sum = x + y;
let y = 20;
document.write(sum);
// Uncaught ReferenceError 발생 : Cannot access 'y' before initialization at hoisting-2.js:줄:글자
// 초기화 전에 'y'에 액세스할 수 없습니다.
// let sum = x+y; 에서 나온 에러로 y가 아직 선언되지 않아 값을 계산할 수 없다는 의미