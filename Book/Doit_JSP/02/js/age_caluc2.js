const today = new Date();
let userInput = prompt(`생년월일8자리`); // 2000년 8월 10일
// document.write(userInput);
let birthDate = userInput.substring(0, 4);
// document.write(birthDate);
let birthDateN = Number(birthDate);

let age = today.getFullYear()
  - birthDateN + 1;

document.writeln(age + "세 입니다.");

