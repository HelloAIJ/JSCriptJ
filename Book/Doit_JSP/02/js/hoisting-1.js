// 55P
// var의 호이스팅 문제점
var x = 10;
var sum = x + y;
var y = 20;
document.write(`var x = 10;<br> var sum = x +y;<br> var y = 20;
<br> document.write(sum)일 때,<br><br> 결과는 오류 발생없이 ${sum}이 된다. `);
// 자바스크립트 해석기가 sum을 계산할때 y값이 할당이 안되어있음에도 불구하고 
// 걍 변수구나? 하고 넘어갔기 때문에(호이스팅) console.log(sum)에서 
// 에러가 안뜨고 NaN이 뜸.

/**
 * NaN의 기원
 * NaN 값은 산술 연산이 정의되지 않은 결과 또는 표현할 수 없는 결과를 도출하면 생성되며, 반드시 오버플로 조건을 나타내는 것은 아님.
 * 숫자가 아닌 값의 변환을 시도했으나 알맞은 원시 숫자 값이 없는 경우의 결과도 NaN이다.
 */

