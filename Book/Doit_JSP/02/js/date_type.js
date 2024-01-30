// 59-70P
console.log(typeof ('안녕'));
console.log(typeof (sum3));
console.log(typeof ('3'));
console.log(typeof (3));
// 따옴표 쓰면 문자열로 인식
// 서로 쌍이되는 따옴표를 써야 함

console.log("-----데이터타입 확인과 연결연산자+, 이스케이프문자\, 백팃``");
let data = "\'s";
console.log(data);
// console.log(typeof(data))

let data2 = "";
console.log(data2);
console.log(typeof (data2));
// 1.사용자가 올바르게 입력
// 2-1.사용자(또라이)가 의도적으로 이상한 답을 입력
// 2-2.선의의 사용자가 의도와는 다르게 다른 데이터 타입을 입력했을때
// 3.사용자가 아무것도 입력하지 않고 다음을 눌렀을때
// 4.취소를 눌렀을때 => null

// + 연결연산자
let data3 = '데이터타입' + data + '입니다.';
console.log(data3);

// ``백팃, ES6부터 사용, 변수표현 ${변수}
let data4 = `데이터타입 ${data} 입니다.`;
console.log(data4);
let data5 = `${data4}`;
console.log(typeof (data5));
let data6 = `123`;
console.log(typeof (data6));

// // 1분복습
// // let userName = prompt('이름이 뭐니?');
// // console.log(`${userName}님, 반갑습니다!`);

// // 불리언, true또는 false만 갖는다, 제어문(if문, switch문...)에서 많이 활용된다
// console.log(10 > 2);
// console.log(10 < 2);
// // 숫자가 들어온 자리에 변수가 들어온다고 생각 해 볼 것

// let first, second; //undefined
// second = null; //재할당, null, 더 명확하게 현재 유효하지 않음을 표현
// console.log(first); //undefined
// console.log(second); //null


// 배열(그룹핑, 복합형 자료)
let fruits = ["바나나", "사과", "포도"];
console.log(fruits);
console.log(fruits[1]);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
// console.log(fruits[fruits.length - 1]); 막냉이 가져오기

// 객체로 된 변수를 그대로 콘솔로 찍으면 모든 정보가 다 보여진다.
// 객체의 각 값에 접근하려면 배열[인덱스번호]를 호출한다
// 배열 객체의 갯수는 length로 확인가능

// 함수콜링 : 함수명()
// 내장함수와 비슷한 것으로 객체뒤에 바로 붙고 프로퍼티라고 한다. ex_ 배열.length

season = ["봄", "여름", "가을", "겨울"];
console.log(season[3]);

document.write(`document.write(typeof ('안녕'))은 ${typeof ('안녕')}입니다.<br><br>`);
document.write(`document.write(typeof (sum3))은 ${typeof (sum3)}입니다.<br><br>`);
document.write(`document.write(typeof ('3'))은 ${typeof ('3')}입니다.<br><br>`);
document.write(`document.write(typeof (3))은 ${typeof (3)}입니다.<br><br>`);

document.write(`document.write(data)는 ${(data)}입니다.<br><br>`);
document.write(data2);
document.write(`let data2 = ""; document.write(data2); document.write(typeof (data2));은 ${(typeof (data2))}입니다.<br><br>`);
document.write(`let data3 = '데이터타입' + data + '입니다.';의 document.write(data3);는 ${data3} <br><br> `);
document.write("let data4 = `데이터 타입 ${data} 입니다.`;의" + "document.write(data4);는" + data4 + "<br><br>");

// 배열(그룹핑, 복합형 자료)
document.write("document.write(fruits);는 " + fruits + " 입니다.<br><br>");
document.write("document.write(fruits[1]);는 " + fruits[1] + " 입니다.<br><br>");
document.write("document.write(fruits.length);는 " + fruits.length + "입니다.<br><br>");
document.write("document.write(fruits[0]);는 " + fruits[0] + " 입니다.<br><br>");
document.write("document.write(fruits[fruits.length - 1]);는 " + fruits[fruits.length - 1] + " 입니다.<br><br>");

// 함수콜링 : 함수명()
// 내장함수와 비슷한 것으로 객체뒤에 바로 붙고 프로퍼티라고 한다. ex_ 배열.length
season = ["봄", "여름", "가을", "겨울"];
document.write("season = [\"봄\", \"여름\", \"가을\", \"겨울\"]; 로 선언하였을 때," + "document.write(season[3]);는 " + season[3] + " 입니다.<br><br>");

// ========================================
// // 숫자 데이터 타입으로 들어오면 콘솔에서 파란색
// // 그외 계산식이 안통하는 문자열 등으로 들어오면 검은색
// // Number(내용물)
// console.log("-----숫자로변환 Number()")

// console.log("20")
// console.log(20)
// console.log(Number("20"))
// console.log(Number(true))
// console.log(Number(false))
// console.log(Number("안녕?"))



// // 정수변환 parseInt()와 실수사용parseFloat()
// console.log("-----정수변환 parseInt()와 실수사용parseFloat()")
// // let userInput = prompt('아무숫자나 입력해 주세요!')
// // console.log(typeof(userInput))
// // //prompt를 통해 들어온 데이터는 몽땅 문자열이다

// // userInput = userInput * 10 // 재할당
// // console.log(userInput)
// // //계산이 되면 number로 변경됨

// // console.log(parseInt(userInput))
// //출력되는 값을 정수로 변경해줌, 숫자가 베이스가 됨



// // 문자열로 변환하기, toStrig(), String()
// console.log("-----문자열로 변환하기, toStrig(), String()")
// let num = 10;
// let isEmpty = true;
// let isEmpty2 = 1;
// // 불리언에서 true가 1이고  false가 0이지만, 문자열 변경 함수에서는 이 값을 숫자와 문자열로 인식한다.
// console.log(num.toString()) // 10
// console.log(num.toString(2)) // '1010'
// console.log(isEmpty.toString()) // 'true'
// console.log(isEmpty2.toString()) // '1'

// let isNull  = null;
// // console.log(isNull.toString()) // 에러남
// // .toString()은 null이나 undefined를 쓸 수 없음
// console.log(String(isNull)) //null
// let isUndefined  = undefined;
// console.log(String(isUndefined)) //undefined

