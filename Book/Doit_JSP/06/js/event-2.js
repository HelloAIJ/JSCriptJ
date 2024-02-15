const button = document.querySelector("button");

button.onclick = function () {
  document.body.style.backgroundColor = "green";
};

const button2 = document.querySelector("#bttn2");

button2.onclick = function () {
  if (document.body.style.backgroundColor != "green") {
    document.body.style.backgroundColor = "green";
  }
  else if (document.body.style.backgroundColor == "green") {
    document.body.style.backgroundColor = "";
  }
};

