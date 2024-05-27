const bi = 0b101;
const oct = 0o101;
const hex = 0x101;

console.log(bi, oct, hex);
console.log(parseInt('101', 36));
console.log(parseFloat('10.100'));
console.log(Number('10.100'));


let a = 0b1010;
let b = 0b1100;
console.log(a & b, a | b, a ^ b, ~b); 