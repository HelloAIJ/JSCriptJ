// const userNumber = document.querySelector("#user-number");
// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   let n = userNumber.value;
//   try {
//     if (n === "" || isNaN(n)) {
//       throw "숫자를 입력하세요.";
//     }
//     n = Number(n);  // n = parseInt(n);
//     if (n <= 10) {
//       document.querySelector("#result").innerText = n;
//     }
//     if (n > 10) {
//       throw "10보다 작은 수를 입력하세요.";
//     }    
//   } catch (err) {
//     alert(err);
//   } finally {
//     userNumber.value = "";
//   }
// });

const userNumber = document.querySelector("#user-number");
const result = document.querySelector("#result");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  let n = userNumber.value;

  try {
    // 핵심! if를 순차적으로 3번 거치게 만듦
    if (n === "" || isNaN(n)) throw "정확하게 입력하세요."; // 이단계에서 공백과 문자열을 거름

    n = Number(n);  // n = parseInt(n); // 맘놓고 숫자나 정수로 변환
    // parseInt()를 거치면 문자열도 다 number로 인식되어 구분하기가 빡셨는데,
    // 아예 문자열거르기를 거치고 난 후에 메서드를 실행하여 아래에서는 숫자만 비교함
    if (n <= 10) result.textContent = n;
    if (n > 10) throw "10보다 작은 수를 입력하세요.";
  } catch (err) {
    // alert(err); //위의 throw에 설정된 에러를 받아서 얼럿으로 띄움
    result.textContent = err;
  } finally {
    userNumber.value = "";
  }
});

/**
 * 보완사항
 * 사용자가 input에 입력하고 엔터를 치는 행위가 익숙하다(ux관점)
 * 클릭이벤트에 구성해 놓은 try...catch문을 함수로 분리하여 외부로 빼낸다
 * 엔테이벤트, 클릭이벤트에 해당함수를 콜링하면 좀 더 사용성을 늘릴 수 있다.
 */