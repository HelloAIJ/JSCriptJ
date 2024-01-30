// 150P
function addNumB(a, b) {
  return a + b;
}
console.log(addNumB(1, 3)); //4 
console.log(addNumB(1, 3, 5, 7)); //4
document.write(`<p style="font-size:18px;">
기본형 : function addNumB(a, b) {return a + b;}에 대해<br>
<p style="text-align:left; font-size:16px; color:blue;">
1) document.write(addNumB(1, 3)),<br> 
2) document.write(addNumB(1, 3, 5, 7))으로 호출하면<br></p>`);
//document.write(addNumB(1, 3));
//document.write(addNumB(1, 3, 5, 7));
document.write(`addNumB(1, 3, 5, 7))의 경우 앞에서 두번째 값 까지만 계산되기 때문에 1)과 2) 모두 값이 4가 된다.<br>`);

// 순서상으로 앞에서 두번째 값 까지만 계산 됨

// 전개구문을 파라미터에 사용하면, 파라미터의 갯수와는 상관없이 유연한 계산을 해준다.
// ...배열명 == 값,값,값, ...
// 대괄호를 뗀 배열을 파라미터에 넣는느낌, 배열의 요소 갯수만큼 파라미터로 들어감, 전개구문이 파라미터로 들어오면 배열이 문자화가 된것으로 끝나는것이 아니라 배열로써 활용할 수 있는 수식은 다 사용가능

function addNum(...numbers) {
  let sum = 0;
  for (let number of numbers)
    sum += number;
  return sum;
}
console.log(addNum(1, 3));//4
console.log(addNum(1, 3, 5, 7));//16
document.write(`<p style="font-size:20px;">
이를 전개구문으로 구현하면,<br>
<p style="text-align:left; font-size:16px; ">
function addNum(...numbers) {<br>
 let sum = 0;<br>
for(let number of numbers)<br>
sum += number;<br>
  return sum;<br>
}<br>과 같이 작성하고
<p style="text-align:left; font-size:16px; color:blue;">
1) document.write(addNum(1, 3)),<br> 
2) document.write(addNum(1, 3, 5, 7))으로 호출하면</p>`);
document.write(`1)은 4이고, 2)는 addNum(1, 3, 5, 7))안의 모든 숫자가 더해져 16이 된다.`);


