//141P
let multiple = (a, b) => a * b;

document.write(`<p style="color:blue;">
let multiple = (a, b) => a * b;로 축약하고</p>
<p style ="font-size:16px;">
document.write(\`두 수를 곱한 결과는 \${multiple(10, 20)}입니다.\`);</p>라고 콜링하면, `);
document.write(`<p style ="text-decoration: underline; ">
두 수를 곱한 결과는 ${multiple(10, 20)}입니다.</p>`);
document.write(` 라고 표시된다.`);