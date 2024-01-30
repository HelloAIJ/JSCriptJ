//150P
function displayFavorites(first, ...favs) {
  let str = `가장 좋아하는 과일은 "${first}"군요.`;
  return str;
}
document.write(`<p style="text-align:left; font-size:16px; color:blue;">
function displayFavorites(first, ...favs) {<br>
  let str = \`가장 좋아하는 과일은 \"\${first}"군요.\`;<br>
  return str;<br>
}</p>document.write(displayFavorites("사과", "포도", "토마토"))를 호출하면 첫번째 인수만 받아서<br>`
  + displayFavorites("사과", "포도", "토마토") + ` 라는 문구를 출력한다.`);


// 전개구문형식의 파라미터는 무조건 마지막에 온다.
// 앞에 오면 구문 오류가 생긴다. 
/* function displayFavorites2(...favs, first) {
  let str = `가장 좋아하는 과일은 "${first}"군요`;
  return str;
} */
const fruits = ["apple", "banana", "grape", "strawberry "];
document.write(`<p> <응용 1></p>`);
document.write(`<p style="text-align:left; font-size:16px; color:blue;">
const fruits = ["apple", "banana", "grape", "strawberry "];<br>
document.write(displayFavorites(...fruits));는 아래와 같은 구문을 출력한다.<br></p>`);
document.write(displayFavorites(...fruits));

const user = [" His ", " name ", " is ", " Hong "];
document.write(`<p> <응용 2></p>`);
document.write(`<p style="text-align:left; font-size:16px; color:blue;">
const user = ['His', 'name', 'is', 'Hong'];<br>
document.write(user);는 배열의 모든 인수를 출력해 준다.<br></p>`);
document.write(user);
document.write(`<br>`);
document.write(`<p style="text-align:left; font-size:16px; color:blue;">
document.write(...user);는 배열의 값만 꺼내어 출력해 준다.<br></p>`);
document.write(...user);