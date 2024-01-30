//127P
// function sum(a, b) {
//   var result = a + b;
// }
// sum(10, 20);
// console.log(result);

// var의 지역스코프.


function sum(a, b) {
  var result = a + b;
  // console.log(result);
  // console.log(result); 
  // 추가, 이건 함수스코프 범주 안이어서 실행하는데 문제가 없음.
  // return result;
  // return 문 추가해야 20번째 값이 도출 없으면 Nan
  document.write(`function sum(a, b){<br>var result = a + b;<br>document.write(result);}과 같이 선언하였을 때,<br> 함수 밖에서 document.write(result)를 하면 error가 발생한다.<br> 안쪽에서 선언해야만 값 `);
  document.write(result);
  document.write(`을 확인할 수 있다.<br>`);
}
sum(10, 20); // 함수콜링
document.write(`<br>따라서,<br> function sum(a, b){<br>var result = a + b;}<br>document.write(result);과 같이<br> document.write를 'sum' 함수 밖에서 선언하면<br> 'result' 변수를 정의하지 않았다는 에러가 발생한다.`);


// // 함수안의 스코프 안에 선언이 되어있다면 반환을 하는게 아닌이상
// // 안나옴 지역변수를 전체 영역에서 호출 불가. 밖으로 불러낼 수 없다. 영역제한.
// console.log(result); 
// // Uncaught ReferenceError: result is not defined .

// // return(반환값)을 설정했을 때, 함수 안의 리턴값을 꺼내려면 변수를 묻는게 아니고, 함수를 콜링하면 뱉어주는게 return(반환값)이므로 함수로 꺼낸다.
// console.log(sum(10, 20) + 20);
// // 값만 궁금하면 굳이 return을 쓸 필요가 없음. 그 함수에 의해서 도출된 값을 2차계산(다른함수)에서 사용하려면 return이 필요하다.