/*
 함수는 [하나의 실행 단위인] 문(Statement)들의 묶음. 함수도 객체임!
 자바스크립트의 핵심
 */


function hello () {
    return 'Hello, World!'; this.name = name;
}

function Dog () {
    this.name = name;
}

const fn = hello;
const obj = {fn: hello};
a = [hello];

console.log(fn());
console.log(obj.fn());
console.log()