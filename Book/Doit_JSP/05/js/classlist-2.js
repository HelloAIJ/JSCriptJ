// 175P
const title = document.querySelector("#title");

// title.onclick = () => {
//   title.classList.add("clicked");
// }

// classList.contains(클래스명) 소유여부를 확인, 가지고있으면 true
// 한가지 클래스를 가졌음을 확신할때는 토글, 여러 클래스를 가졌을 경우 contains
title.onclick = () => {
  if (!title.classList.contains("clicked")) {
    // clicked를 안가지고 있으면
    title.classList.add("clicked");
  } else {
    // 가지고있으면
    title.classList.remove("clicked");
  }
};
