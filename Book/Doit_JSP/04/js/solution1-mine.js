// 155P
function isPositive(n) {
  if (n > 0) {
    document.write(`${n}은 양수입니다.`);
  } else if (n < 0) {
    document.write(`${n}은 음수입니다.`);
  } else {
    document.write(`0을 입력하셨습니다.`);
  }
}
document.write(`<p style ="text-align:left; font-size:18px; color:blue;">
function isPositive(n) {<br>
  if (n > 0) {document.write(\`\${n}은 양수입니다.\`);}<br>
  else if (n < 0) {document.write(\`\${n}은 음수입니다.\`);}<br>
  else {document.write(\`0을 입력하셨습니다.\`);}<br>
}<br>
<br>
const number = parseInt(prompt('+, - 부호를 포함해 숫자를 입력할 것.'));<br>
// parseInt() 는 숫자가 아닐 경우 NaN을 반환함<br>
if (!isNaN(number)) {isPositive(number);}<br>
// 숫자일 경우에만 실행<br>
else if (isNaN(number)) { document.write(\`숫자가 아니거나 입력 안됨\`); }
// 그 외의 것
</p><br>`);
const number = parseInt(prompt('+, - 부호를 포함해 숫자를 입력할 것'));
// parseInt() 는 숫자가 아닐 경우 NaN을 반환함
if (!isNaN(number)) {  // 숫자일 경우에만 실행
  isPositive(number);
}
else if (isNaN(number)) { document.write(`숫자가 아니거나 입력 안됨`); }
document.write(`<br>`);
document.write(`<p style ="text-align:left; font-size:18px; color:blue;">
console.log(number);<br>
const Int_number = parseInt(number);<br>
if (number !== null) {<br>
  if (!isNaN(Int_number)) isPositive(number); <br>
  /* 숫자일 경우에만 함수콜링 */<br>
  else if (isNaN(Int_number))alert('공백인채로 확인하거나, 문자, 취소 금지');<br>
  /* NaN인경우 alert로 안내 멘트 */<br>
}<br>
</p><br>`);
console.log(number);
const Int_number = parseInt(number);
/**
 * parseInt()를 거친 값이 숫자가 아니라면 NaN이나오지만,
 * 이를 typeof()로 물어보면 무조건 number로 나온다.
 * NaN값은 falsy이므로 false로 취급됨. 조건문에는 true값만 넣을 수 있다.
 * if (변수 !== NaN) {}은 쓸수 있지만, 반대 경우를 판별해 낼 수 없다.
 * isNaN()은 어떤 값이 NaN인지 판별가능. 주어진 값이 NaN이면 true, 아니면 false.
 */

// 최종실행
// 사용자의 prompt입력 여부에 대하여 1차 if문으로 가르기
if (number !== null) {
  if (!isNaN(Int_number)) isPositive(number); /* 숫자일 경우에만 함수콜링 */
  else if (isNaN(Int_number)) alert('공백인 채로 확인하거나 문자 입력, 취소 버튼 클릭하지 마세요'); /* NaN인경우 */
}
//  else alert('취소 누르지 말고 뭐라도 쓰라고');