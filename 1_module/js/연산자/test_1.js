console.log("연습 문제 1번")
for(let i = 0.1; i < 1; i += 0.1){
    console.log(Number(i.toFixed(1)));
}


console.log("연습 문제 2번")
for (let i = 1; i <= 10; i++) {
    console.log(Number(Math.sqrt(i).toFixed(3)));
}


console.log("연습 문제 3번")
const dt = new Date();
console.log(dt);
console.log(dt.toLocaleString());
console.log(dt.getFullYear());
console.log(dt.getMonth());
console.log(dt.getDate());
console.log(dt.getDay())


console.log("연습 문제 4번")
let a, b;
function addPoint(a, b) {
    let tfix;
    if (a.toString().length >= b.toString().length) {
        tfix = (a.toString().length)-2;
    } else {
        tfix = (b.toString().length)-2;
    }

    return (a + b).toFixed(tfix);
}

console.log(addPoint(0.21354, 0.1));
console.log(addPoint(0.14, 0.28));
console.log(addPoint(0.34, 0.226));