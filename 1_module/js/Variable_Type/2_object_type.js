const o1 = new Object();
const o2 = {};

console.log(o1 == o2);
console.log(o1 === o2);
console.log(`ol의 값은 ${o1}이며, 데이터 타입은 ${typeof(o1)}`);
console.log(`o2의 값은 ${o2}이며, 데이터 타입은 ${typeof(o2)}`);
/*
o1은 클래스에서 받아온 인스턴스이기 때문에 서로 다르다.
 */


// Object
const user = {
    id : 1,
    name : 'Hong',
    get : function(obj) { return `${obj.id} : ${obj.name}`;},
    getInfo() { return `${this.id} - ${this.name}`;}
};
console.log(user);


// Array
const web = ['HTML', 'CSS', 'Javascript', 'React'];
const data = [['python', 'R', 'SQL'], ['Hadoop', 'Spark', 'Kafka'], ['Tableau', 'PowerBI', 'Lookerstudio']];

console.log(web);
console.log(data);


// function
function f1 (arr) { return arr};
var f2 = function (arr) { return arr };
const f3 = (arr) => { return arr };

console.log(f1(web));
console.log(f2(data));
console.log(f1(user));