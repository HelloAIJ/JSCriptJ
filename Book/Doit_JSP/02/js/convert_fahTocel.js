// 섭씨 온도 = (화씨온도 - 32) / 1.8
// 섭씨 : celsius, 화씨 : fahrenheit

let fah = parseFloat(prompt("변환할 화씨 온도"));
// let fah = Number(prompt("변환할 화씨 온도"));
// 사용자에게 숫자로 받은 수치(실수)를 변수에 넣는다.

let cel;
// 값할당 안한상태

cel = ((fah - 32) / 1.8).toFixed(1);
// cel = ((fah - 32) / 1.8); 
// 섭씨온도 계산식
// .toFixed(n); 반올림하여 소수점 n자리까지 출력
// cel = cel.toFixed(2);

alert(`화씨 ${fah}도는 섭씨 ${cel}도입니다.`);
// document.write(`당신이 입력한 화씨 ${fah}℉는 섭씨로 변환시 ${cel}℃입니다.`);
