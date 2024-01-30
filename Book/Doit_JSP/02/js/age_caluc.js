const today = new Date();
let birthDate = new Date(2000, 7, 10); // 2000년 8월 10일
// birthDate = new Date(1986, 10, 05);

let age = today.getFullYear()
  - birthDate.getFullYear()
  + 1;

document.writeln(age + "세 입니다.");

// const 현재연도 = 2026
// 만나이계산 = (현재연도 - 태어난연도) -1
// console.log(만나이계산);

// 만나이계산 = (2024 - 태어난연도) -1
// console.log(만나이계산);