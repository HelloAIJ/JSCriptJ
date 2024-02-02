//167P
let tabButtons = document.querySelectorAll('.tab > span'); // 탭버튼 선언
let tabBoxs = document.querySelectorAll('.con > span'); // 탭버튼 선언

tabButtons.forEach((eachButton, index) => {
  eachButton.addEventListener('click', function () {
    // 초기화, on 다 때기 
    for (const tabButton of tabButtons) tabButton.classList.remove("on");
    for (const tabBox of tabBoxs) tabBox.classList.remove("on");
    tabBoxs[index].classList.add("on");
    this.classList.add("on");
    // 화살표 함수에서는 this 사용 안되는 점만 유의
  });
});
tabButtons[0].click();


// ie에선 화살표함수 안됨, ie용 es5
// Array.prototype.forEach.call(tabButtons, function(eachButton, index) {
//     eachButton.addEventListener('click', function() {
//         let tabBoxs = document.querySelectorAll('.tabBox'); // 탭박스 선언
//         for (var i = 0; i < tabBoxs.length; i++) {
//             tabBoxs[i].classList.remove("on");
//             tabButtons[i].classList.remove("on");
//             // 모든 버튼과 박스에서 on제거
//         }
//         tabBoxs[index].classList.add("on");
//         // 내가 누른 탭버튼과 인덱스번호가 같은 탭박스에 class on추가
//         this.classList.add("on");
//     })
// });