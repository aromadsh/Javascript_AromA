// function f() { console.log('arguments=', arguments); }

// f(1, 2, 33, 4, 55, 6);

// function f2(...args) { console.log('args=', args); }

// f2(11, 22, 33);

// function f3(x, ...args) { console.log('x args=', x, args); }

// f3(11, 22, 33, 44);

// user = {id: 1, name: 'P', age: 33};
// const fn = ({age}) => age; 
// const {age2:age3 = fn(user)} = {age22: 20};
// console.log(age3);

const hong = {id: 1, name: 'Hong'};
const lee = {id: 2, name: 'Lee'};

function f1(user) { console.log(user.id, user.name); }
var f2 = function(user) { console.log(user.id, user.nae) };
const f3 = (user) => console.log(user.id, user.name);

console.log(f2, f3);