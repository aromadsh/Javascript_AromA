// let a = a, b = 2;
let a = 1;
let b = 3;

let c = (a++, b++);
const d = (a--, b+a);

console.log(c, a, b);
console.log(a, b, c, d);

let e = void(c = a + b);
console.log(a, b, c, e);


const first = '';
const last = 'Bob';

console.log(`${first} ${last}`);
console.log(`${first}${first ? ' ' : ''}${last}`);
// if (first) {
//     console.log(first);
// }
// console.log(last);
console.log(`${first}${first&&' '}${last}`);