console.log(isNaN(Infinity));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);

console.log(9007199254740991 === 9007199254740991);
console.log(9007199254740991 === 9007199254740992);
console.log(-9007199254740992 === 9007199254740993);

const num = 123.456;
console.log(num.toFixed(2));
console.log(Number(num.toFixed(2)));
console.log(num, Math.trunc(Number(num.toFixed(2))));
console.log(num, Math.trunc(Number(num.toFixed(2)) + 9));


console.log(0.1 + 0.2);
console.log(0.1 + 0.7);
console.log(0.3 + 0.2);


console.log(Math.trunc((0.1 + 0.2) * 10)/10);

three = 0.1+0.2;
const ep = Math.abs(three - 0.3) - Number.EPSILON;
console.log('ep :', ep);
