// 113P

let n = prompt("1보다 큰 숫자를 입력하세요.");
let sum = 0;
let arr = [];

if (n !== null && n > 1) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 == true) {
      continue;
    }
    // sum += i;
    arr.push(i);
    sum += i;
  }
}
// document.write(`${[...arr]}`);
document.write(arr.join("+"));
document.write(`=${sum} <br>입력하신 숫자 ${n}에서 짝수의 합은 ${sum}입니다. <br>`);

// if (n !== null && n > 1) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 == true) {
//       continue;
//     }
//     sum += i;
//     sumArr = `${i} + `;
//     document.write(sumArr);

//   }
// }
// document.write(`<br> 입력하신 숫자 ${n}에서 짝수의 합은 ${sum}입니다. <br>`);
