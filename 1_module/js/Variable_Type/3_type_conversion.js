// 숫자 -> 문자(2,8 ... 진수 값으로)
const n = 123;

console.log(n.toString(), typeof(n.toString()));
console.log(n.toString(2), typeof(n.toString(2)));
console.log(n.toString(8), typeof(n.toString(8)));
console.log(n.toString(36), typeof(n.toString(36)));

// int 또는 float으로 변환
console.log(3, typeof(3));
console.log(parseInt(3), typeof(parseInt(3)));
console.log(parseFloat(3), typeof(parseFloat(3)));

// 10진수를 2진수
let num = 1234;
console.log(num.toString(2), parseInt(num.toString(2), 2));
console.log(num.toString(8), parseInt(num.toString(8), 8));
console.log(num.toString(16), parseInt(num.toString(16), 16));

// 부호나 연산자를 통한 형변환
const x = 5;
console.log(typeof x, typeof !!x, typeof +x.toString());

// 문자열 및 연산 | 병합을 통한 형변환
console.log('sss' + 2, ':', typeof ('sss' + 2));
console.log('sss' + {id: 1}, ':', typeof ('sss' + {id: 1}));

let number_type = 20
s = {id : 1} + 2;
r = number_type + '30';
q = number_type + '30';

console.log(s, typeof s);
console.log(r, typeof r);
console.log(q, typeof q);


// 암묵적 형변환 (+연산자를 활용하여 숫자 연산자로 변환)
let i = 100;

console.log(i.toString(), ':', typeof i.toString());
console.log(10 + i.toString(), ':', typeof (10 + i.toString()));
console.log(10 + +i.toString(), ':', typeof (10 + +i.toString()));

let u = 'hong';
u.age = 30;
console.log(u.age);
u = 7;
console.log(u, !7);