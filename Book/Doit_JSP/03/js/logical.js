// 101P
const num1 = parseInt(prompt("첫번째 양의 정수 : "));
const num2 = parseInt(prompt("두번째 양의 정수 : "));
let str;

// // AND 연산. 둘다 true여야 결괏값 true
// if (num1 % 2 === 0 && num2 % 2 === 0) {
//  // str = "두 수 모두 짝수입니다." ;
//   str = `당신이 입력한 ${num1}와(과) ${num2}, 두 수 모두 짝수입니다.`;
// // str할당
// }
// else {
//   str = `당신이 입력한 ${num1}와(과) ${num2} 중 짝수가 아닌 수가 있습니다.`;
// // str = "짝수가 아닌 수가 있습니다.";
// // str할당
// }
// // alert(str);
// // str 문구 띄우기
// document.write(str);
// // str 문구 띄우기

// if (num1 % 2 === 0 && num2 % 2 === 0) {
//   str = `당신이 입력한 ${num1}와(과) ${num2}, 두 수 모두 짝수입니다.`;
// }
// else if (num1 % 2 !== 0 && num2 % 2 !== 0) {
//   str = `당신이 입력한 ${num1}와(과) ${num2}, 두 수 모두 홀수 입니다.`;
// }
// else if (num1 % 2 === 0 && num2 % 2 !== 0) {
//   str = `당신이 입력한 ${num1}와(과) ${num2} 중 , 짝수는 ${num1}입니다.`;
// }
// else if (num1 % 2 !== 0 && num2 % 2 === 0) {
//   str = `당신이 입력한 ${num1}와(과) ${num2} 중 , 짝수는 ${num2}입니다.`;
// }
// else (num1 === null || num2 === null);
// {
//   str = `입력을 잘못하셨습니다. F5(새로고침)를 눌러 다시 입력해주십시오.`;
// }

if (num1 % 2 === 0 && num2 % 2 === 0) {
  str = `당신이 입력한 ${num1}와(과) ${num2}, 두 수 모두 짝수입니다.`;
}
else if (num1 % 2 !== 0 && num2 % 2 !== 0) {
  str = `당신이 입력한 ${num1}와(과) ${num2}, 두 수 모두 홀수 입니다.`;
}
else if (num1 % 2 === 0 && num2 % 2 !== 0) {
  str = `당신이 입력한 ${num1}와(과) ${num2} 중 , 짝수는 ${num1}입니다.`;
}
else if (num1 % 2 !== 0 && num2 % 2 === 0) {
  str = `당신이 입력한 ${num1}와(과) ${num2} 중 , 짝수는 ${num2}입니다.`;
}
else if (num1 === NaN || num2 === NaN) {
  str = `입력을 잘못하셨습니다. F5(새로고침)를 눌러 다시 입력해주십시오.`;
}


document.write(str);
