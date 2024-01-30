// 113P

let userInput = prompt(`다음의 배열 중 기입한 숫자보다 큰 숫자의 배열을 확인하기
(1, 3, 5, 7, 9, 11, 13, 15, 17, 19 중 원하시는 숫자를 입력해주세요.)`);
console.log(userInput);
const arrs = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let X = "";
let bNum = false;

for (arr of arrs) {
  if (bNum)
    X += arr + ",";
  else if (arr == userInput)
    bNum = true;
}

if (bNum == false)
  alert(`조건에 맞는 숫자를 입력부탁드립니다. `);
else if (X == "")
  alert(`가장 큰 숫자를 입력하셨습니다. `);
else {
  X = X.substring(0, (X.length - 1));
  alert(`${userInput}보다 큰 값을 가지고 있는 데이터는 ${X} 입니다.`);
  document.write(`${userInput}보다 큰 값을 가지고 있는 데이터는 ${X} 입니다.`);

}
// from S

// let userInput = prompt(`다음의 배열 중 기입한 숫자보다 큰 숫자의 배열을 확인하기
// (1, 3, 5, 7, 9, 11, 13, 15, 17, 19 중 원하시는 숫자를 입력해주세요.)`);
// const arrs = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

// let comment = ``;
// if (userInput == null || userInput == 0) { alert(`입력된 값으로는 확인할 수 없습니다. 새로고침(F5) 해주십시오.`); }
// else if (userInput >= 20) { alert(`배열 중에 있는 숫자만 기입하셔야 합니다. `); }
// else if (userInput % 2 === 0) { alert(`배열 중에 있는 숫자만 기입하셔야 합니다. `); }
// else {
//   for (arr of arrs) {
//     if (arr !== 19 && arr > userInput)
//       comment += `${arr}, `;
//   }
//   alert(`${userInput}보다 큰 값을 가지고 있는 데이터는 ${comment}19 입니다.`);
//   document.write(`${userInput}보다 큰 값을 가지고 있는 데이터는 ${comment}19 입니다.`);
// }



// let comment = ``;
// for (arr of arrs) {
//   if (arr !== 19 && arr > userInput)
//     comment += `${arr}, `;
// }
// alert(`${userInput}보다 큰 값을 가지고 있는 데이터는 ${comment}19입니다.`);
// document.write(`${userInput}보다 큰 값을 가지고 있는 데이터는 ${comment}19입니다.`);}

// if (userInput !== null) {
//   if (arr !== userInput) { }
// }
// //   if (userInput >= 20) { alert(`배열 중에 있는 숫자만 기입하셔야 합니다. `); }
// //   else if (userInput <= 19) {
// //     for (arr of arrs) {
// //       if (arr != userInput) { } break;
// //     }
// //   }
// else {
//   let comment = ``;
//   for (arr of arrs) {
//     if (arr !== 19 && arr > userInput)
//       comment += `${arr}, `;
//   }
//   alert(`${userInput}보다 큰 값을 가지고 있는 데이터는 ${comment}19입니다.`);
//   document.write(`${userInput}보다 큰 값을 가지고 있는 데이터는 ${comment}19입니다.`);
// }

// else {  }

// else if (userInput >= 20) { alert(`배열 중에 있는 숫자만 기입하셔야 합니다. `); }
// if (userInput >= 20) { alert(`배열 중에 있는 숫자만 기입하셔야 합니다. `); }
// else if (userInput !== NaN) { alert(`숫자가 아닙니다.`); }
// else if (userInput !== null) { alert(`아무것도 입력되지 않았습니다.`); }
// console.log(typeof(userInput));
// if (userInput ) { alert(`입력된 값으로는 확인할 수 없습니다. 새로고침(F5) 해주십시오.`); }
// else {
//   for (arr of arrs) {
//     if (arr !== 19 && arr > userInput)
//       comment += `${arr}, `;
//   };
//   alert(`${userInput}보다 큰 값을 가지고 있는 데이터는 ${comment}19입니다.`);
//   document.write(`${userInput}보다 큰 값을 가지고 있는 데이터는 ${comment}19입니다.`);
// }


// let comment = ``;

// if (userInput !== arr) {
//   alert(`${userInput}은 배열에 있는 값이 아닙니다.`);
// }
// else if (userInput !== null) {
//   alert(`${userInput} 값이 입력되지 않았습니다.`);
// }
// else {
//   for (arr of arrs) {
//     if (arr !== 19 && arr > userInput)
//       comment += `${arr}, `;
//   };
//   alert(`${userInput}보다 큰 값을 가지고 있는 데이터는 ${comment}19입니다.`);
//   document.write(`${userInput}보다 큰 값을 가지고 있는 데이터는 ${comment}19입니다.`);
// }
// if (userInput > 19) {
//   alert(`숫자가 19보다 큽니다.새로고침(F5) 해주세요.`);
// }


// let includeArr;
// if()
// for (let i = 0; i < arrs.length; i++) {
//   document.write(`${arrs[i]}. `);
// }

// if (userInput = arrs) {
//   alert(`ㅇㅇ.`);
// }
// else if (userInput > 19) {
//   alert(`숫자가 19보다 큽니다.새로고침(F5) 해주세요.`);
// }
// else {
//   alert(`아무것도 입력되지 않았거나 숫자가 아닙니다.새로고침(F5) 해주세요.`);
// }
// else { }
// else{ alert(`${userInput}보다 큰 값을 가지고 있는 데이터는`); }
// let userInput = parseInt(prompt(`다음의 배열 중 기입한 숫자보다 큰 숫자의 배열을 확인하기
// (1, 3, 5, 7, 9, 11, 13, 15, 17, 19 중 원하시는 숫자를 입력해주세요.)`));
// if (userInput === arr) {
//   let comment = ``;
//   for (arr of arrs) {
//     if (arr !== 19 && arr > userInput) {
//       comment += `${arr}, `;
//     }
//   }
//   alert(`${userInput}보다 큰 값을 가지고 있는 데이터는 ${comment}19입니다.`);
// }

// else if (userInput !== arr) {
//   alert(`아무것도 입력되지 않았습니다. 새로고침(F5) 해주세요.`);
//   userInput = prompt(`다음의 배열 중 기입한 숫자보다 큰 숫자의 배열을 확인하기
// (1, 3, 5, 7, 9, 11, 13, 15, 17, 19 중 원하시는 숫자를 입력해주세요.)`); {
//     alert(`아무것도 입력되지 않았습니다. 새로고침(F5) 해주세요.`);
//   }
// }



// else {
//   let comment = ``;
//   for (arr of arrs) {
//     if (arr !== 19 && arr > userInput) {
//       comment += `${arr}, `;
//     }
//   }
//   alert(`${userInput}보다 큰 값을 가지고 있는 데이터는 ${comment}19입니다.`);
// }
// }
// else { prompt(`1, 3, 5, 7, 9, 11, 13, 15, 17, 19 중 원하시는 숫자를 입력해주세요`); }
// { conesole.log(`아무것도 입력되지 않았습니다. 새로고침(F5) 해주세요.`); }
// const arrs = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// // 나중에 배울 .filter() 함수를 데이터에 대해 돌리면 원하는 값을 찾을 수 있다.
// // 본 솔루션은 for문의 로직을 이해하기 위해 만든 예제에 대한 답임

// // document.write(`${userInput}보다 큰 값을 가지고 있는 데이터는 `);
// // for (let i = 0; i < arr.length; i++) {
// //   if (arr[i] > userInput && arr[i] != 19) { document.write(`${arr[i]}, `); }
// //   else if (arr[i] >= 19) { document.write(`${arr[i]}`); }
// // }
// // document.write(`입니다.`);



// if (userInput > 19) {
//   alert(`숫자가 19보다 큽니다.새로고침(F5) 해주세요.`);
// }
// else {
// else if (data < 19) { alert(`없습니다`); };

// ;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > userInput && arr[i] != 19);
//   // else if (alert(`없습니다`));
// }
// alert(`${arr[i]} 입니다.`);


// // for ..of로 쓰기
// let comment = ``;
// for (let data of arr) {
//   if (data > 10) {
//     comment += `${ data }, `;
//     // 값 누적
//   }
// }
// document.write(`10보다 큰 값을 가지고 있는 데이터는 ${ comment }입니다.`);;