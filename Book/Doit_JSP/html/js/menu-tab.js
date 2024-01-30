//1depth
let headerTabButtons = document.querySelectorAll('.header-tab > span');
let headerTabBoxs = document.querySelectorAll('.header-con-tab');
//2depth
let headerTab2ndButtons = document.querySelectorAll('.header-con-tab > span'); // 탭버튼 선언
const title = document.querySelector(".main-title");
const lists = document.querySelectorAll('.main-tab');
//3depth
let maintabButtons = document.querySelectorAll('.main-tab > span'); // 탭버튼 선언
let maintabBoxs = document.querySelectorAll('.main-con'); // 탭버튼 선언
const title2nd = document.querySelector(".main-con-title");

headerTabButtons.forEach((eachButton, index) => {
  eachButton.addEventListener('click', function () {
    for (const headerTabButton of headerTabButtons) headerTabButton.classList.remove("on");
    for (const headerTabBox of headerTabBoxs) headerTabBox.classList.remove("on");
    headerTabBoxs[index].classList.add("on");
    this.classList.add("on");
    // 각탭콘텐츠의 첫째span들을 가져오라고 하고, 그 배열변수의 해당 index를 넣어서 클릭과 연결
    // console.log(headerTab2ndButtons);
    let firstTabs2depth = document.querySelectorAll('.header-con-tab > span:first-child'); // 탭버튼 선언
    firstTabs2depth[index].click();
  });
});
headerTabButtons[0].click();

headerTab2ndButtons.forEach((eachButton, index) => {
  eachButton.addEventListener('click', function () {
    for (const headerTab2ndButton of headerTab2ndButtons) headerTab2ndButton.classList.remove("on");
    for (const list of lists) list.classList.remove("on");
    this.classList.add("on");
    lists[index].classList.add("on");
    title.innerText = document.querySelector(".header-con-tab .on").innerText;
    // if (headerTab2ndButtons) {
    //   for (const list of lists) list.classList.remove("on");
    //   lists[index].classList.add("on");
    // }
    let firstTabs3depth = document.querySelectorAll('.main-tab > span:first-child'); // 탭버튼 선언
    firstTabs3depth[index].click();
  });
});
headerTab2ndButtons[0].click();

maintabButtons.forEach((eachButton, index) => {
  eachButton.addEventListener('click', function () {
    // 초기화, on 다 때기 
    for (const maintabButton of maintabButtons) maintabButton.classList.remove("on");
    for (const maintabBox of maintabBoxs) maintabBox.classList.remove("on");
    maintabBoxs[index].classList.add("on");
    this.classList.add("on");
    // 화살표 함수에서는 this 사용 안되는 점만 유의
    // title2nd.innerText = document.querySelector(".main-tab > .on").innerText;
  });
});
maintabButtons[0].click();