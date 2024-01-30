const box = document.querySelector("#box");

box.addEventListener("mousemove", (e) => {
  // console.log(`이벤트 발생 위치 : ${e.pageX}, ${e.pageY}`);
  // alert(`이벤트 발생 위치 : ${e.pageX}, ${e.pageY}`);
  if (document.addEventListener) {
    document.addEventListener("mousemove", resultFun, false);
  }
  else if (document.attachEvent) {
    document.attachEvent("onmousemove", resultFun);
  }
  else {
    document.onmousemove = resultFun;
  }
});

//  문서에서 마우스가 움직일때(mousemove) 마다 resultFun() 함수가 실행됩니다.
//  x.clientX,Y 는 페이지에서 이벤트 발생한 X,Y 좌표를 가져옵니다.
function resultFun(x) {
  var xY = x.clientX + " * " + x.clientY;
  var positionLeft = x.clientX;
  var positionTop = x.clientY;
  // result  div 에 innerHTML 로 xY 변수를 적용 합니다.
  document.getElementById('box').innerHTML = xY;
  //  result  div 의 position 위치를  positionLeft, Top 변수 값으로 style 적용해줍니다.
  document.getElementById('box').style.left = (positionLeft - 25) + "px";
  document.getElementById('box').style.top = (positionTop + 30) + "px";
}