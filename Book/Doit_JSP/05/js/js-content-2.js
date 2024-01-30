// ID(#xxx) 인 경우엔 선언 생략 가능. ID의 고유성
const title = document.querySelector("#title");
const userName = document.querySelector("#desc p");
// const userName = document.querySelectorAll("#desc p")[0];
const pfImage = document.querySelector("#profile img");

// 변수.이벤트명 = 함수
// title.onclick = function(){
//     title.innerText = "프로필";
// }
title.onclick = () =>
  title.innerText = title.innerText === "My Profile" ? "프로필" : "My Profile";
// 삼항연산자를 이용하여 텍스트 토글 가능
// title에서 추출한 텍스트랑 "My Profile"과 비교해서 같으면 "프로필", 다르면 "My Profile"로 바꿔서 title에 재할당 해라  => title을 클릭할때마다

userName.onclick = () => userName.innerHTML = `이름 : <b>민들레</b>`;
pfImage.onclick = () => pfImage.src = "images/pf2.png";

