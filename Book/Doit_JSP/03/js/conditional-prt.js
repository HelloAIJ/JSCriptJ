let age = prompt("당신의 나이는(숫자만사용)");
console.log(age);
console.log(parseInt(age)); // NaN
const Int_age = parseInt(age);

if (isNaN(age)) {
  alert(`다시 입력해주세요(문자입력금지).`);
  age = prompt(`나이를 다시 입력해주세요.(숫자만사용)`);
  console.log(age);
  console.log(parseInt(age));
}
else if (age === null) {
  alert("답변을 해주세요"); // 사용자가 취소를 누른 경우
  age = prompt(`나이를 다시 입력해주세요.(숫자만사용)`);
}
else {
  if (Int_age >= 75) alert("고령자");
  else if (Int_age >= 60) alert("장년");
  else if (Int_age >= 40) alert("중년");
  else if (Int_age >= 20) alert("청년");
  // 여기서부터는 역순으로 배열하여야 올바른 알림을 내보낼 수 있다.
  else if (Int_age <= 2) alert("영아");
  else if (Int_age <= 12) alert("어린이");
  else if (Int_age <= 19) alert("청소년");

}
// const Int_age = parseInt(age);
// if (age != null) {
//   // 사용자가 대답을 한 경우
//   if (Int_age >= 80) alert("노인");
//   else if (Int_age >= 20) alert("성인");
//   else if (Int_age <= 5) alert("유아");
//   else if (Int_age < 19) alert("청소년");
// }

// else if (isNaN(Int_score)) alert("문자는 입력하지 말아라");
// age = prompt(`나이를 다시 입력해주세요.(숫자만사용)`);
