function multiple1(a, b, c) {
  return a * b + c;
}
console.log(multiple1(5, 10));  // a=5, b=10, c=undefined NaN
document.write(`function multipleSp(a, b, c) { // Sp = separate<br>
  return a * b + c;}로 선언 한 후<br><br> a, b, c의 값을 다음과 같이 할당하면<br>document.write(multipleSp(5, 10));은 `);
document.write(multiple1(5, 10));  // a=5, b=10, c=undefined NaN
document.write(`이 나온다.<br><br>`);

// 인자가 부족하면, 계산이 안된다. 숫자가 없어서 계산이 안될 뿐 오류가 아님.
// 현업에서 이런거 발생하면 찾으러 가기 힘듦.

// ES6부터는 파라미터에 기본값 깔고 갈 수 있음
function multiple(a, b = 5, c = 10) {
  return a * b + c;
}

// 기본값이 있는데 인자를 갯수대로 입력하면 덮어써서 올바르게 계산해줌
console.log(multiple(5, 10, 20));  // a=5, b=10, c=20

// 인자가 모자라면 기본값 뽑아서 계산해줌
console.log(multiple(10, 20));  // a=10, b=20, c=10(default)
console.log(multiple(10));  // a=10, b=5(default), c=10(default)
console.log(multiple()); // NaN

// 내가 준비한것이 패턴이면 좋겠고, 이패턴이 다양한 케이스를 대응할 수 있게 고민을 하고 수식을 짜야한다.
// 사용자가 뭘 입력해서 내가 준비한 케이스로 몰고가야한다. 외운다고되는 부분보다는, 많은 케이스 경험이 중요하다. 많이 보는것을 집중하자!

document.write(`function multiple(a, b = 5, c = 10) {
  return a * b + c;}로 선언 한 후<br><br> a, b, c의 값을 다음과 같이 할당하면<br><br>`);
document.write(`document.write(multiple(5, 10, 20))(3개 모두 재할당)일 때, 5, 10, 20은 각각 a, b, c 값이 되어<br>5*10+20으로 대입되고 그 계산값 `);
document.write(multiple(5, 10, 20));
document.write(`이 나온다.<br><br>`);
document.write(`document.write(multiple(10, 20))(2개 재할당)일 때, 10과 20은 각각 a, b 값이 되어<br> 10*20+10(초기값)으로 대입되고 그 계산값 `);
document.write(multiple(10, 20));
document.write(`이 나온다.<br><br>`);
document.write(`document.write(multiple(10))(1개 재할당)일 때, 10은 a 값이 되어 10*5(초기값)+10(초기값)으로 대입되고 그 계산값 `);
document.write(multiple(10));
document.write(`이 나온다.<br><br>`);
document.write(`document.write(multiple())로 비어 있을 경우, 계산할 값이 없어 계산 안되고 NaN을 뱉어낸다. `);
