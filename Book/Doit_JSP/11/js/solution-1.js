// class Lecture {
//   constructor(hasTutor, lectID, members) {
//     this.hasTutor = hasTutor;
//     this.lectID = lectID;
//     this.members = members;
//   }
// }

// function getStudents(classRoom) {
//   let { hasTutor, lectID, members } = classRoom;
//   let tutor, students;
//   hasTutor ? [tutor, ...students] = members : [...students] = members;
//   return students;
// }

// let class1 = new Lecture(false, 'L001', ["Ahn", "Han", "Park"]);
// let class2 = new Lecture(true, 'L002', ["Lee", "Choi", "Kim"]);

// document.write(`강의 : ${class1.lectID}, 수강생 : ${getStudents(class1)}<br>`);
// document.write(`강의 : ${class2.lectID}, 수강생 : ${getStudents(class2)}<br>`);

// 학생들 리스트에 숨어있는 강사를 찾아서 빼기
// 클래스를 이용해 객체만들기
class Lecture {
  // 기본 골조, 프로퍼티
  constructor(강사여부, 강의아이디, 수강생들) {
    this.hasTutor = 강사여부;
    this.lectID = 강의아이디;
    this.members = 수강생들;
    // 키이름과 파라미터로 들어오는 값 할당 헷갈리지 말 것
  }
}
// 객체생성
// let 객체갈될 변수명 = new Lecture(강사여부, 강의아이디, 수강생들)
let A반 = new Lecture(false, 'L001', ["안씨", "한씨", "박씨"]);  // 강사 없음
let B반 = new Lecture(true, 'L002', ["이씨", "최씨", "김씨"]);  // 강사 있음, 이씨가 강사임
console.log(A반);

function getStudents(classRoom) {
  let { hasTutor, lectID, members } = classRoom;
  // 파라미터로 들어온 정보 객체구조분해할당, hasTutor, lectID, members변수로 불러올수있음
  let tutor, students; // 빈변수 선언
  hasTutor ? [tutor, ...students] = members : [...students] = members;
  // 1. 만들어진 객체에서 들어온 members를 추출하여 
  // 2. hasTutor의 여부를 가지고 삼항연산자로 분리해놓는다. 
  //    - true: 전개구문으로 선생+학생으로 배열분할
  //    - false: 전개구문으로 학생들로 배열 생성
  return students;
  // 3. students 변수를 뱉어라
}


// 강의 아이디를 찍고, 수강생만 뱉어라
// console.log(`강의 : ${A반.lectID}, 수강생 : ${getStudents(A반)}`); //안씨, 한씨, 박씨
// console.log(`강의 : ${B반.lectID}, 수강생 : ${getStudents(B반)}`); //최씨, 김씨
document.write(`강의 : ${A반.lectID}, 강사유무 : ${A반.hasTutor}, 수강생: ${getStudents(A반)} <br> `); //안씨, 한씨, 박씨

document.write(`강의 : ${B반.lectID}, 강사유무 : ${B반.hasTutor}, 수강생: ${getStudents(B반)} <br> `); //최씨, 김씨
// 추후 업그레이드
// 고정값으로 함수를 돌렸기 때문에 전체 멤버에 대한 안내와 선생에 대한 안내가 없음.
// 해당 메시지 추가해주기
// return값으로 배열을 뱉으면 반환값을 여러개 쓸 수 있다.;;;;