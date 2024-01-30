const number = parseInt(prompt("자연수를 입력하세요"));
let isPrime;

if (number === 1) {
  document.write(`${number}은 소수도 합성수도 아닙니다.`);
}
else if (number === 2) {
  isPrime = true;   // 숫자 2는 당연히 소수이므로 true로 설정
  document.write(`${number}는 가장 작은 소수 입니다.`);

}
else {
  // 1과 2를 제외한 모든 값이 들어왔을 때 isPrime을 구분해줘
  for (let i = 2; i < number; i++) {
    // i가 증가하여 number 이전숫자만큼 몫계산을 반복하여 true/flase 재할당을 받고, 마지막에 받은 true/false값으로 아래의 제어문을 만난다.
    if (number % i === 0) {
      // i로 나누어서 똑 떨어지면 소수가 아니다. break로 나가기
      isPrime = false;
      break;
    }
    else {
      // i로 나누어서 똑 떨어지지 않는다면 소수다
      isPrime = true;
    }
  }
  // 문구완성

  if (isPrime) {
    document.write(`${number}는(은) 소수입니다.`);
  }
  else {
    document.write(`${number}는(은) 소수가 아닙니다.`);
  }
}

// if (number === 1) { document.write(`1은 소수도 합성수도 아닙니다.`); }
// else if (number === 2) { isPrime = true; } // 숫자 2는 당연히 소수이므로 true로 설정
// else {
//      for (let i = 2; i < number; i++) {
//      if (number % i === 0) { isPrime = false; break; }
//      else { isPrime = true; }
//      }

// if (isPrime) { document.write(`${number}는 소수입니다.`); }
// else { document.write(`${number}는 소수가 아닙니다.`); }
// }
