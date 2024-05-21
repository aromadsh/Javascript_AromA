let a = 1;
let b = a;
let c = [1, 2];
let d = c;

a = 2
console.log(a, b);
c.push(3);

d = [3, 4]

console.log(c, d);