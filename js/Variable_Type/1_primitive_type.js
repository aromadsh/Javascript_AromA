const n =123;
const bi = 123n;
console.log(n == bi);
console.log(n === bi);
console.log(`n의 값은 ${n} 이며 데이터 타입은 ${typeof(n)}이다.`); 
console.log(`bi의 값은 ${bi} 이며 데이터 타입은 ${typeof(bi)}이다`);
/*
n : 123
bi : 123
n == bi : 서로의 값은 같기 때문에 true
n === bi : 서로의 값은 같지만 값의 타입이 다르기 때문이 false
*/

const s = 'abc';
const ss = new String('abc');
console.log(s == ss);
console.log(s === ss);
console.log(`s의 값은 ${s} 이며 데이터 타입은 ${typeof(s)}이다.`); 
console.log(`ss의 값은 ${ss} 이며 데이터 타입은 ${typeof(ss)}이다`);
/* 
s : abc
ss : abc
s == ss : 서로 값은 같기 때문에 true
s === ss : 서로의 갑은 같지만 값의 타입이 다르기 때문에 false
*/

const sss = `${s} - ${
    n + Number(bi)
}`;
console.log(`$sss의 값은 ${sss}이며, 타입은 ${typeof(sss)}이다.`);
/*
sss는 숫자와 문자가 결합하면서 string으로 형변환이 된다.
 */

const b = false; 
const bb = new Boolean();
console.log(b == bb);
console.log(b === bb);
console.log(`b의 값은 ${b} 이며 데이터 타입은 ${typeof(b)}이다.`); 
console.log(`bb의 값은 ${bb} 이며 데이터 타입은 ${typeof(bb)}이다`);
/* 
b : false
bb : false
b == bb : 서로 값은 같기 때문에 true
b === bb : 서로의 갑은 같지만 값의 타입이 다르기 때문에 false
*/

const sym = Symbol("foo");
const sym2 = Symbol("foo");
console.log(sym == sym2);
console.log(sym === sym2);
/*
Symbol은 고유의 값을 만들기 때문에 값이 비슷해보여도 각각 다른 값을 취하기 떄문에
false가 된다.
 */

const un = undefined;
const nu = null;
console.log(un == nu);
console.log(un === nu);
/*
서로 다른 값이며, 속성도 다르다.
 */