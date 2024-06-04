console.log("user 객체를 받아서 id와 name을 출력하는 함수를 3개의 함수로 작성하시오.");

const hong = {id: 1, name: 'Hong'};
const lee = {id: 2, name: 'Lee'};

// function f1 (user) { console.log(`${user.id}, '${user.name}'`); };

// var f2 = function (user) { console.log(`${user.id}, '${user.name}'`); };

// const f3 = (user) => { console.log(`${user.id}, '${user.name}'`); };

// f1(hong);
// f2(hong);
// f3(hong);
// f1(lee);
// f2(lee);
// f3(lee);

function f1 ({id, name}) {
    console.log(id, name);
}

const f2 = function ({id, name}) {
    console.log(id, name);
};

const f3 = ({id, name}) => console.log(id, name);
f1(hong);
f2(hong);
f3(hong);


console.log("\n\n");

console.log("다음 user 객체에서 passwd 프로퍼티를 제외한 데이터를 userInfo 라는 변수에 할당하시오.");

const user = {id: 1, name: 'Hong', passwd: 'xxx', addr: 'Seoul'};

let {passwd, ...userInfo} = user;

console.log(userInfo); 

console.log("\n\n");

console.log("다음 arr에서 3개의 id를 id1, id2, id3로 할당하시오. ");

const arr = [[{id: 1}], [{id:2}, {id: 3}]];

const id1 = arr[0][0].id;
const id2 = arr[1][0].id;
const id3 = arr[1][1].id;

console.log(id1, id2, id3);
