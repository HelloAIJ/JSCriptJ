// const url = "https://reqres.in/api/products/10";
// const result = document.querySelector("#result");

// let xhr = new XMLHttpRequest();
// xhr.open('GET', url, true);
// xhr.send();

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     let product = JSON.parse(xhr.responseText);
//     console.log(product);
//     result.innerHTML = `
//       <p>상품명 : ${product.data.name}</p>
//       <p>생산년도 : ${product.data.year}</p>
//     `;
//   } else if (xhr.status === 404) {
//     // 파일이 없을 때 메시지 띄우기
//   }
// };

let xhr = new XMLHttpRequest();
const url = 'solution-1.json';
xhr.open('GET', url);
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    const 제품정보 = JSON.parse(xhr.responseText);
    const result = document.querySelector('#result');
    result.innerHTML = `
            <ul>
                <li>브랜드: ${제품정보.제작사}</li>
                <li>상품명: ${제품정보.상품명}</li>
                <li>생산년도: ${제품정보.생산년도}</li>
            </ul>
        `;
  } else if (xhr.status === 404) {
    // 파일이 없을 때 메시지 띄우기
    result.innerHTML = `데이터를 불러올 수 없습니다`;
  }
};