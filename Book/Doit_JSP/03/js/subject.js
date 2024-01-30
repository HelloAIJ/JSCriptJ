// 100P
// switch(조건) {
//   case 값1 : 실행문
//     break;
//   case 값2 : 실행문
//     break;
//   default : 실행문
// }
let subject = prompt("신청할 과목을 선택하세요. 1-HTML, 2-CSS, 3-Javascript");

if (subject !== null) {
  switch (subject) {
    case "1": document.write("HTML을 신청했습니다.");
      // '조건에 맞는 UI화면을 실행시켜라'라는 함수 콜링도 가능

      break;
    case "2": document.write("CSS를 신청했습니다.");
      break;
    case "3": document.write("Javascript를 신청했습니다.");
      break;
    case "HTML": document.write("HTML을 신청했습니다.");
      break;
    case "CSS": document.write("CSS를 신청했습니다.");
      break;
    case "Javascript": document.write("Javascript를 신청했습니다.");
      break;
    case "html": document.write("HTML을 신청했습니다.");
      break;
    case "css": document.write("CSS를 신청했습니다.");
      break;
    case "javascript": document.write("Javascript를 신청했습니다.");
      break;
    case "1-HTML": document.write("HTML을 신청했습니다.");
      break;
    case "2-CSS": document.write("CSS를 신청했습니다.");
      break;
    case "3-Javascript": document.write("Javascript를 신청했습니다.");
      break;
    case "1-html": document.write("HTML을 신청했습니다.");
      break;
    case "2-css": document.write("CSS를 신청했습니다.");
      break;
    case "3-javascript": document.write("Javascript를 신청했습니다.");
      break;
    default: document.write("잘못 입력했습니다. 새로고침(F5) 한 후 다시 입력해 주세요.");
    // 이도저도 아닐때 이쪽으로 빠진다, 동일 구문으로 사용자에게 '니잘못임'을 인지시키므로 사용자는 몇번의 실수를 거치고 유도한대로 따라오게 되어있다.
    // if...else if문 보다 사용자 컨트롤이 쉽다
  }
}
else {
  document.write("입력되지 않았습니다.  새로고침(F5) 한 후 다시 시도해주세요.");
}

// || or 
// && and
// !(팩토리얼) not

// if (!조건1) {
//   실행문;
// }

// if문의 조건에 수식이 들어간걸 부정하려면 =연산자에 !f를 붙인다 !=, !==
// if문의 조건이 변수자체(존재여부를 물을 때)일 때, 부정하려면 !변수

// let app = '사과', 보통은 let app = true(Boolean)로 선언하고 값을 할당해 사용하기도 함 
// let app; → undefined → falsy → flase 취급  그래서 꼭 !(부정)으로
// if(!app){
//   실행문
// }