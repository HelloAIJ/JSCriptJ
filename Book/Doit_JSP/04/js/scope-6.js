// 130P 
// teacher 파일은 scope-5와 scope-6 병합되어 있음

const factor = 5;
// 기존(scope-5.js)
// function calc() {
//   return num * factor;
// }
// 변경(scope-6.js)
function calc(num) {
  return num * factor;
}
// 함수를 선언할 때, 반환에 필요한 파라미터를 선언해준 함수로 바꿔야 한다.(핵심!!!)

// // 기존(scope-5.js)
// {
//   const num = 10;
//   let result = calc();
//   document.write(`result : ${result}`);
// }
// 변경(scope-6.js)
{
  let result = calc(10);
  document.write(`const factor = 5;<br>
  // 블록스코프를 고려해 수정<br>
  function calc(num) {<br>
    return num * factor;<br>
  }<br>
  {<br>
    let result = calc(10);<br>
    document.write(\`result : \${result} \`);<br>
  }<br>
  에서 'let result = calc(10);{} 함수 내에서<br>
  document.write(\`result : \${result} \`)를 선언하면 아래의 값을 뱉어낸다<br><br>  
  ▶  `);
  document.write(`result : ${result}을 뱉어낸다. `);
}
document.write(`<br>`);
document.write(`<br>`);
document.write(`<br>`);

// 응용 1
// let calc = function(num) {
//   return num * factor
// }
// 익명함수로 바꿔놓는다.

// 응용 2 - 화살표함수로 변환
// let calc2 = (num) => {
// return num * factor
// }

// 응용 3 - 화살표함수 축약버전
// let calc2 = num => num * factor
document.write(`밖에서 cocument.write()구문을 활용해 calc()의 값을 100으로 변경하면<br>
document.write(\`result : \${calc(100)}\`); 는<br><br>`);
document.write(`▶  result : ${calc(100)}을 뱉어낸다.`);
// 밖에서 콘솔

// 블록스코프 안에서 선언된 let, const 변수들은 못나오는게 맞다.
//(참고) 파라미터는 기본적으로 var로 선언된 변수이며, 생략되어서 안보이는 것 뿐
// 함수를 선언할 당시에 파라미터를 쓰면 전역이므로 함수스코프 안에서의 계산에는 문제가 없게된다.
// 밖에서 파라미터 할당하여 함수를 콜링하는것에는 오류가 생기지 않는다.
// 다만, 해당함수를 let,const으로 선언(익명함수로 만들기)하고 블록스코프안에 있다면 밖에서 콜링시 오류생김.
// {
//   let result = calc(200)
//   console.log(`${result}`)
// }
