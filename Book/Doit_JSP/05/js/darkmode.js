const bttn = document.querySelector("button");

bttn.onclick = function () {
  document.body.classList.toggle("dark");
};

// css 설계 시 최상위 부모의 class를 변경하는 방법으로 접근한다.
// 1) 기본적인 최상위 부모 아래요수들의 공통요소 짜기
// 2) 최상위 부모의 class명 변경 이벤트 생성
// 3) css는 색상값 위주로 변경 레이아웃은 공통요소로 사전 생성
// (css 중복선언 방지 가능, 일이 준다 ㅋㅋㅋ)
// 기본: body ul li{사이즈, 위치, 정렬 셋팅}
// A: body.dark ul li{컬러값변경}
// B: body.light ul li{컬러값변경}
// C: body.(color) ul li{컬러값변경}