//152P
// let counter = 1;
// i = 1;
// j = 1;
// let mincounter = 1;

// let timer = setInterval(() => {
//   console.log(i++ + "초");
//   counter++;
//   if (counter === 59) clearInterval(timer);
// }, 1000);

// let minchecker = setInterval(() => {
//   console.log(j++ + "분");
//   mincounter++;
//   if (mincounter === 59) clearInterval(minchecker);
// }, 60000);


// clearInterval(타이머함수명)
// let 타이머함수명 = setInterval() 함수가 종료된다.


let counter = 1;
i = 1;
let mincounter = 1;
j = 1;
let timer = setInterval(() => {
  console.log(i++ + "초");
  counter++;
  if (counter === 60) clearInterval(timer);
}, 1000);

let minchecker = setInterval(() => {
  console.log(j++ + "분");
  mincounter++;
  if (mincounter === 60) clearInterval(minchecker);
}, 60000);
// conesole.log();
document.write(`<p style ="text-align:left; font-size:18px; color:blue;">
let counter = 1;<br>
i = 1;<br>
let mincounter = 1;<br>
j = 1;<br>
let timer = setInterval(() => {<br>
  console.log(i++ + "초");<br>
  counter++;<br>
  if (counter === 60) clearInterval(timer);<br>
}, 1000);<br>
<br>
let minchecker = setInterval(() => {<br>
  console.log(j++ + "분");<br>
  mincounter++;<br>
  if (mincounter === 60) clearInterval(minchecker);<br>
}, 60000);<br></p> 위와 같이 작성하면
<p style ="font-size:16px; color:black;">
1초<br>
...<br>
59초<br>
1분<br>
...<br>
59분<br>
</p> 
이 시간의 흐름에 따라 콘솔에 찍힌다.`);