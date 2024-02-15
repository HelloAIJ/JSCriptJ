window.onload = alert("안녕하세요?");

// 조건설정
window.onresize = function () {
  let height = window.height;
  if (height != 540) { alert("창 크기 크기가 변경되었습니다."); }
};
window.onscroll = function () {
  let scroll = window.scroll;
  alert("스크롤 하시는 중인가요?");
};
