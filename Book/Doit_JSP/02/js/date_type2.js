// 66-72P
document.write("-----객체{키:값}");
// 키와 값으로 이루어진 한쌍을 프로퍼티라고함
// let 변수명 = {
//   키: 값,
//   키: 값,
//   키: 값,
//   [키]: 값,
// };
let gitBook = {
  title: "깃&깃허브 입문",
  page: 272
};
//객체안의 프로퍼티는 순서를 지정할 수 없음
document.write(gitBook);
//But, 객체 중에도 순서가 있는 경우가 있음.
document.write(gitBook.pages);
//점표기법
document.write(gitBook["title"]);
//대괄호표기법

// 개체 1분 복습하기
// 내가 가지고 있는 물건의 정보를 객체화 해보기

let cup = {
  brand: "글라스락",
  ml: 500,
  color: "화이트베이지",
  lock: true
};

document.write(cup);
document.write(cup.ml);
document.write(cup["color"]);
//위의 객체정보 엘리먼트에 삽입해보기
//document.querySelector('#cupInfo').textContent = '글라스락 텀블러';
document.querySelector('#cupInfo').textContent = cup.brand;
//document.querySelector('#cupInfo').textContent = cup.color;
//document.querySelector('#cupInfo').textContent = cup["color"];
document.querySelector('.cupColor').textContent = cup.color;
document.write(cup);
// 이 아이가 최고!?
// https://developer.mozilla.org/ko/docs/Web/API/Node/textContent

let smartphone = {
  brand: "삼성",
  version: "G21",
  color: "black",
};
document.write(smartphone);
// {brand: '삼성', version: 'G21', color: 'black'}
document.write(smartphone.version);
document.write(smartphone["color"]);





console.log("고유값 지정, 심벌 Symbol()");
let var1 = Symbol();
let var2 = Symbol();
console.log(var1 === var2);

let id = Symbol();
// 기본값
// let id = sumbol("아이디 고유값:설명추가가능")
const member = {
  name: "kim",
  [id]: 12345
};

console.log(member);
// {name:'kim, symbol():12345}
// 배열[인덱스번호]
// 객체명.키 : 점표기법
console.log(member.name);
console.log(member.id);
// undefined
console.log(member[id]);
// 12345

// 객체를 따로 만들어서, 1개의 프로퍼티에 심볼처리를 하고 그 값을 콘솔에 찍어보기

const friend = {
  name: "dada",
  [id]: 1205
};
console.log(friend);
console.log(friend.name);
console.log(friend.id);
console.log(friend[id]);

member.id = 6789;
console.log(member);
// 객체 데이터 추가
// {name: 'kim', id: 6789, Symbol(): 12345}

// 객체에서는 추가, 수정, 삭제가능
// 객체 데이터 수정해보기
member.name = "park";
// 객체에서 값을 변경하거나 추가할 때 사용함
console.log(member);
// 같은키의 값이 변경된다
// {name: 'park', id: 6789, Symbol(): 12345}

friend.id = 1005;
// 외부에서 수정시도 시
console.log(friend);
// {name: 'park', id: 1005, Symbol(): 12345}
// id 값은 덮어씌워지는 것이 아닌 추가처리됨. 심볼은 보조

friend.name = "lala";
console.log(friend);

member[id] = 356874;
// 심벌로 지정된 값을 변경할 수 있다
// 심벌이 값을 재할당, 재선언 할 수 없다는 개념은 외부데이터 변동과 연관지어 생각할 것
// 단, 나는 변경가능(제작자)
console.log(member);
// {name: 'park', id: 1005, Symbol(): 12345 → 356874로 변경됨}
