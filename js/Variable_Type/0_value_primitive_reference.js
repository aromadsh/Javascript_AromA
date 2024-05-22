let a = 1;
let b = a;
let c = [1, 2];
let d = c;
// a : 1, b : 1, c : [1, 2], d : [1, 2]

a = 2
console.log(a, b);
// a = 2, b = 1

c.push(3);
d = [3, 4]
console.log(c, d);
// c : [1, 2, 3], d : [3, 4]