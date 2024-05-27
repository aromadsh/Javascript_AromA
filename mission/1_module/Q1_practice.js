console.log("for문을 이용하여 다음과 같이 정확한 숫자를 출력하는 코드를 작성하시오.");

for(let i = 0.1; i < 1; i += 0.1) console.log(Number(i.toFixed(1)));

console.log("\n\n");

console.log("1 ~ 10 사이의 정수에 대해 제곱근을 소숫점 3자리까지 출력하시오.");
for (let i = 1; i <= 10; i++) console.log(Number(Math.sqrt(i).toFixed(3)));

console.log("\n\n");

console.log("오늘 날짜의 요일을 출력하는 switch문을 사용해서 작성해 보고, switch문을 사용하지 않은 더 간단한 방법도 찾아보세요.");

const dt = new Date();

// switch문을 사용하지 않고, 가장 간단한 방법
const week = '일월화수목금토'
console.log(`${week[dt.getDay()]}요일`);

// switch문을 사용한 방법
let result = "";
switch (dt.getDay()) {
    case 0:
        result = '일';
        break;
    case 1:
        result = '월';
        break;
    case 2:
        result = '화';
        break;
    case 3:
        result = '수';
        break;
    case 4:
        result = '목';
        break;
    case 5:
        result = '금';
        break;
    case 6:
        result = '토';
        break;
};
console.log(`${result}요일`);


console.log("\n\n");

console.log("다음과 같이 올바른 더하기 연산을 하는 addPoints 함수를 작성하시오.");

let a, b;
function addPoints (a, b) {
    let fix;
    af = a.toString().length;
    bf = b.toString().length;

    if (af >= bf) fix = af;
    else fix = bf;
    console.log((a+b).toFixed(fix-2));
};

addPoints(0.21354, 0.1);
addPoints(0.14, 0.28);
addPoints(0.34, 0.226); 

