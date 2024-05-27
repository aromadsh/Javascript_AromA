const arr = [100, 200, 300, 400, 500, 600, 700];

// 연습 문제 1-1번
for(const i in arr){
    console.log(i)
}

// 연습 문제 1-2번
for(const i in arr){
    console.log(arr[i])
}

const obj = { name: 'lim', addr: 'Yongsan', level: 1, role: 9, receive: false }

// 연습 문제 1-3번
for(const i in obj){
    console.log(i)
}

// 연습 문제 1-4번
for(const i in obj){
    console.log(obj[i])
}

// 연습 문제 1-5번
for(const i of Object.keys(obj)){
    console.log(obj[i])
}

// 연습 문제 1-6
// Object.defineProperty(obj, 'level', {entries(obj))
// console.log();

Object.freeze(obj, 'role');
console.log(Object.entries(obj));