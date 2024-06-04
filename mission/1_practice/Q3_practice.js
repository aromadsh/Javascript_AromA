// 연습문제 1번 문제

const arr = [100, 200, 300, 400, 500, 600, 700];
const obj = { name: 'lim', addr: 'Yongsan', level: 1, role: 9, receive: false };


console.log("1-1 for-in문을 사용하여 배열의 인덱스(키)를 출력하시오.");

for(const i in arr) console.log(i);


console.log("\n\n");

console.log("1-2 for-in문을 사용하여 배열의 원소(값)를 출력하시오.");

for(const i in arr) console.log(arr[i]);


console.log("\n\n");

console.log("1-3 for-in문을 사용하여 프로퍼티 이름(키)을 출력하시오.");

for(const i in obj) console.log(i);


console.log("\n\n");

console.log("1-4 for-in문을 사용하여 프로퍼티 값을 출력하시오.");

for(const i in obj) console.log(obj[i]);


console.log("\n\n");

console.log("1-5 for-of문을 사용하여 프로퍼티 값을 출력하시오.");

for(const i of Object.keys(obj)) console.log(obj[i]);


console.log("\n\n");

console.log("1-6 level 프로퍼티가 열거(노출)되지 않도록 설정하시오.");

Object.defineProperty(obj, 'level', { enumerable: false });

console.log(obj);


console.log("\n\n");

console.log("1-7 role 프로퍼티는 읽기전용으로 설정하시오.");

Object.freeze(obj, 'role');

obj.role = 99;

console.log(obj);

console.log("\n\n\n\n");

// 연습문제 2번 문제

console.log("2-1 [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]] 배열을 객체로 만드시오.");

const Arr = [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]];
const makeObjectFromArray = (arr) => {
    let arr2obj = {};
    for(const i in arr) {
        let [key, ...value] = arr[i];
        arr2obj[key] = value;
    };
    return arr2obj;
};

console.log(makeObjectFromArray(Arr));


console.log("\n\n");

console.log("2-2 위에서 만든 객체를 다시 배열로 만드시오.");

const Obj = { A: [ 10, 20 ], B: [ 30, 40 ], C: [ 50, 60, 70 ] };
const makeArrayFromObject = (obj) => {
    let obj2arr = [];
    let counter = 0;
    for(const j in obj) {
        obj2arr[counter] = [j, ...obj[j]];
        counter += 1;
    };
    return obj2arr;
};

console.log(makeArrayFromObject(Obj));


console.log("\n\n\n\n");

// 연습문제 3번 문제

console.log("원시값(primitive)만을 갖는 객체 kim을 복사하는 프로그램을 Object의 클래스 메소드 또는 spread(...) 연산자를 사용하지 말고 작성하시오.");

const kim = {nid: 3, nm: 'Hong', addr: 'Pusan'};

const copyObject = (obj) => {
    newObj = {};
    for(const i in obj) {
        newObj[i] = obj[i];
    }
    return newObj;
}

const newKim = copyObject(kim);
newKim.addr = 'Daegu';
console.log(kim.addr !== newKim.addr);