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

const sss = `${s} - ${
    n + Number(bi)
}`;

const b = false; const bb = new Boolean();

const sym = Symbol("foo");
const sym2 = Symbol("foo");

const un = undefined;
const nu = null;