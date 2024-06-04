const stack = [];
const queue = [];

stack.push(1);
stack.push(2);
stack.push(3);

var stackOutput = stack.pop();


queue.push(10);
queue.push(20);
queue.push(30);

var queueOutput = queue.shift();

console.log("🚀 ~ stack:", stack, stackOutput)
console.log("🚀 ~ queue:", queue, queueOutput)


const list = ['글3', '글2', '글1'];

const 글2index = list.indexOf('글2');
console.log("🚀 ~ 글2index:", 글2index)

function addArticle (article) {
    list.unshift(article);
}

function removeOld() {
    list.pop();
}

addArticle('글4');
removeOld();
removeOld();

list.push('글4');
console.log("🚀 ~ 글4:", list);


console.log(list);



const hong = { id : 1, name : 'Hong'};
const kim = { id : 2, name : 'Kim'};
const park = { id : 3, name : 'Park'};
const choi = { id : 4, name : 'Choi'};

const users = [park, kim, hong, choi];

const id2userIndex = users.findIndex((v, i) =>  v.id === 2);
console.log("🚀 ~ id2userIndex:", id2userIndex);

const id2user = users.find(v =>  v.id === 2);
console.log("🚀 ~ id2user:", id2user)

console.log('------------------------------------------')
users.forEach(user => console.log(user.id, user.name));

const userIds = users.map(v => v.id);
console.log("🚀 ~ userIds:", userIds);


const evenUsers = users.filter(v => v.id % 2 == 0);
console.log("🚀 ~ evenUsers:", evenUsers);


const isEveryLess5 = users.every(v => v.id < 5);
console.log("🚀 ~ isEveryLess5:", isEveryLess5);

const hasId3 = users.some(v => v.id === 2);
console.log("🚀 ~ hasId3:", hasId3);

const second = users[1];
console.log("🚀 ~ second:", second)

const end = users.at(-1);
console.log("🚀 ~ end:", end)

const beforeend = users.at(-2);
console.log("🚀 ~ beforeend:", beforeend)

const arr1 = [1, 2, 3];
console.log("🚀 ~ arr1:", arr1)
const arr2 = [4, 5, 6];
console.log("🚀 ~ arr2:", arr2)

// const arr3 = arr1.concat(arr2);
const arr3 = [...arr1, ...arr2];
console.log("🚀 ~ arr3:", arr3)

a5 = ['이', '김', '홍', '팡', '자']
const sortUsers = a5.sort();
console.log("🚀 ~ sortUsers:", sortUsers)