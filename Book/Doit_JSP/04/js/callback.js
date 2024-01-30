// 144P
function showData(name, age) {
  // 이름과 나이를 받아 알림 창에 표시하는 showDate 함수 선언
  alert(`안녕하세요? ${name}님 나이가 ${age}세 이시군요.`);
  document.write(`<p style="text-align:left; font-size:16px;color:blue;">
  function showData(name, age) {<br>
    alert(\`안녕하세요? \${name}님 나이가 \${age}세 이시군요.\`);<br>
    }<br>
    function getData(callback) {<br>
      let userName = prompt("이름을 기입해주세요.");<br>
      let userAge = prompt("나이를 기입해주세요.(숫자만 사용)");<br>
      callback(userName, userAge);<br>
    };<br>
    getData(showData);</p>`+ `▶  안녕하세요? ${name}님 나이가 ${age}세 이시군요.<br><br>`);

}
function getData(callback) {
  // 프롬프트 창에서 값을 받는 getData 함수 선언
  // getData의 매개변수는 콜백함수로 직관적 표기와 일반적 표기인 
  // callback으로 명명한다. 다른 이름 사용가능함.  
  let userName = prompt("이름을 기입해주세요.");
  let userAge = prompt("나이를 기입해주세요.(숫자만 사용)");
  callback(userName, userAge);
};

getData(showData);

// 응용 문제
function foodMenu(callback) {
  let food = prompt("어떤 음식을 좋아하세요.");
  callback(food);
};
function callMenu(meal) {
  alert(`${meal}을(를) 좋아하시는군요.`);
  document.write(`<p style="text-align:left; font-size:16px;color:blue;">
  function foodMenu(callback) {<br>
    let food = prompt("어떤 음식을 좋아하세요.");<br>
    callback(food);<br>
  };<br>
  function callMenu(meal) {<br>
    alert(\`\${meal}을(를) 좋아하시는군요.\`);<br>
  };<br>
    foodMenu(callMenu);</p>
    `+ `▶  ${meal}을(를) 좋아하시는군요.`);
};
foodMenu(callMenu);
