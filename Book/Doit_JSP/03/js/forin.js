// 106P
// for in 문은 객체의 키만 가져올 수 있음. 키 값을 접근하려면 [] 사용
const gitBook = {
  title: "깃&깃허브 입문",
  pubDate: "2019-12-06",
  pages: 272,
  finished: true
};
// for (let a in gitBook) {
//   console.log(`${a}`);
// }

// for(변수 in 객체명) {실행문}
// 변수는 내가 짓는 이름이고, 객체 안에서 키:값으로된 쌍에서 키만 가지고 온다

// 일반 객체에서 값을 가져오는 방법
console.log(`${gitBook.pages}`);
// 272

document.write('<span style = "color:black;">' + 'const gitBook = {<br>' +
  'title : ' + '\"깃&깃허브 입문\",<br>' +
  'pubDate : ' + '\"2019-12-06\",<br>' +
  'pages : ' + '272, <br>' +
  'finished : ' + 'true<br>' +
  '};<br>' +
  'for (key in gitBook) {<br>' +
  'document.write(\`' + '${key}' + ' :\`);<br>' +
  'document.write(\`' + '${gitBook[key]}' + '\`);' +
  '};<br>' + '</span>');

document.write(`▼<br> `);

for (key in gitBook) {
  document.write(`${key} : `);
  //객체 각 쌍안에서 키만 출력함
  // for.. in문에서 각 쌍안에서 키를가지고 오고 싶다면 ${변수명}을 써주면 된다
  // 키이름 도출

  document.write(`${gitBook[key]} <br> `);
  //객체 각 쌍안에서 값만 출력함
  // for.. in문에서 각 쌍안에서 값을 가지고 오고 싶다면 ${객체명[변수명]}을 써주면 된다
  // 각 키에 할당된 값 도출

  // document.write(`${gitBook.pages} < br > `);
  // 객체에서 고정값만 추출(기존 객체에서 값가져오는 법), 반복횟수는 쌍 수만큼
}
document.write(`<br> `);

// 배열을 for... in으로
const students = ["Park", "Kim", "Lee", "Kang"];
// console.log(students);

document.write('<span style = "color:black;">' + 'const students = ["Park", "Kim", "Lee", "Kang"];<br>'
  + 'for (student in students) {'
  + 'document.write(\`${student}:\`);<br>'
  + 'document.write(`${students[student]} < br > `);'
  + '}<br>' + '</span >');
// key 값이 없어 인덱스 번호 :0, :1, :2, :3 이 출력됨

document.write(`▼<br> `);

for (student in students) {
  document.write(`${student}: `);
  // key 값이 없어 인덱스 번호 :0, :1, :2, :3 이 출력됨
  document.write(`${students[student]} <br> `);

}
document.write(`<br> `);
// 객체는 키:값, 배열은 [값,값]
// 배열에게 키를 물으면 인덱스 번호, 값을 물으면 값
// 데이터를 구성할 때, 정보의 디테일이 필요하면 객체로 만들기, 순서와 값만 필요하면 배열로 만들자
// ==> 혹시 함수로 컨트롤을 할 때 번호가 필요한가?
// ==> 배열로 만들기
// 객체인데 번호가 있는 복합구조 나중에 배움



// 객체 for... of로
// for (const data of gitBook) {
//   // document.write(`${ data }: `);
//   // 오류발생
//   // document.write(`${ gitBook[data]} < br`);
//   // 오류발생
// }
// gitBook is not iterable 라는 오류남, 시도 자체가 안됨

// 1분복습하기, 내가만든 객체를 for ..in돌리기
let cup = {
  brand: "글라스락",
  ml: 500,
  color: "화이트베이지",
  lock: true
};

document.write('<span style="color:black">' + 'let cup = {<br>'
  + 'brand: "글라스락",<br>'
  + 'ml: 500, <br>'
  + 'color: "화이트베이지",<br>'
  + 'lock: true'
  + '};<br>'
  + 'for (a in cup) {'
  + 'document.write(\`< br > ${a}: ${cup[a]}\`);'
  + '};' + '</span><br>');
document.write(`▼`);


for (a in cup) {
  document.write(`<br> ${a} : ${cup[a]}`);
};