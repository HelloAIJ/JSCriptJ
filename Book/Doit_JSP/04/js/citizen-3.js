//147P
// 초기화함수?
// 리셋의 개념이 속을 털어버린다는 개념(깨끗이 비운다는 개념)으로 생각하는 순간 이해안됨.
// 최초 설정한 상태로 돌린다는 개념으로 받아들이기
let init = () => {
  return function (a, b) {
    return a - b > 0 ? `${a}이 ${b}보다 큼` : `${b}이 ${a}보다 큼`;
    //<br> // return a - b > 0 ? a - b : b - a;<br>
    // return a - b > 0 ? `a가 b보다 큼` : `b가 a보다 큼`;<br>
    // 삼항연산자      질문 ? 참일때 : 거짓일때<br>
  };
};
document.write(`let init = () => {}을 화살표 함수로 선언하고, ` + `document.write(\`\${init()}\`);를 호출하면<br>값이 아닌 아래와 같은 함수 내 구문들이 출력된다.` + `<p style="text-align:left; font-size:16px;color:blue;">${init()}</p>`);
// 오해할 수 있는 부분, init함수는 파라미터가 없다.
document.write(`이어서, document.write(\`\${init(30,20)}\`);를 호출해도<br>값이 아닌 아래와 같은 함수 내 구문들이 출력된다.` + `<p style="text-align:left; font-size:16px;color:blue;">${init(30, 20)}</p>`);
// return에 적혀있는 함수가 고대로 나옴

document.write(`제대로 호출하려면 document.write(\`\${init()(10, 20)}\`)와 같이 호출하여야 값이 계산되어 나온다.<br> a-b가 0보다 클 때 그 값이 거짓일 때의 출력문 ` + `\'${init()(10, 20)}\'` + `을 출력할 수 있다.`);
// return 안의 return을 출력을 하는데 익명함수임, ()부르고 그에맞는 파라미터를 넣어주면 된다.
// 클로저, 스코프체인이 가능하다.

document.write(`<br><br><br>`);
// 클로저 연습
// 화살표함수
let init2 = (a) => {
  return function (b) {
    return a - b > 0 ? a - b : b - a;
  };
};
let init10 = init2(10); // a를 10으로 고정하여 변수선언
let init10fixed = init10(20);
// 클로저스코프체인으로 엮은거, 20은 b값임

document.write(`<p style= "color:black;"><화살표 함수로 클로저연습하기></p><p style="text-align:left; font-size:16px;color:blue;">
let init2 = (a) => {<br>
  return function (b) {<br>
    return a - b > 0 ? a - b : b - a;<br>
  };};<br> 
let init10 = init2(10); <br>
let init10fixed = init10(20);</p>  
화살표 함수와 삼항연산자를 사용해 init2 함수를 작성하고 a는 10, b는 클로저스코프 체인으로 엮어 20을 선언한 후<br>
document.write(init10fixd)로 콜링하면<br><br>
a-b가 0보다 크면 일 때의 거짓 값을 계산하는 b-a에 각 값이 대입되어 `+ init10fixed + `이라는 값이 계산되어 나온다.`);