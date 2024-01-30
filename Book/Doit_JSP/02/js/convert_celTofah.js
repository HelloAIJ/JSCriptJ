// 섭씨 온도 = (화씨온도 - 32) / 1.8
// 섭씨 : celsius, 화씨 : fahrenheit


// let fah = parseFloat(prompt("변환할 화씨온도"));
// let cel;
// cel = ((fah - 32) / 1.8).toFixed(2);
// document.write(`당신이 입력한 화씨 ${fah}℉는 섭씨로 변환 시 ${cel}℃입니다.`);

// body에 출력하기
// 섭씨 온도 = (화씨온도 - 32) / 1.8 & 화씨 온도 = (섭씨온도 * 1.8) + 32
// let cel2 = parseFloat(prompt("화씨로 변경할 궁금한 섭씨 온도를 적어주세요(숫자만)"));
// let cel2 = Number(prompt("화씨로 변경할 궁금한 섭씨 온도를 적어주세요(숫자만)"));
// let fah2 = (cel2 * 1.8) + 32;
// fah2 = fah2.toFixed(2);
// document.write(`당신이 입력한 섭씨 온도 ${cel2}℃는 화씨로 변환하면 ${fah2}℉ 입니다.`);

let cel = parseFloat(prompt("변환할 섭씨온도"));
let fah;
fah = ((cel + 32) * 1.8).toFixed(2);
document.write(`당신이 입력한 ${cel}℃는 화씨로 변환 시 ${fah}℉입니다.`);