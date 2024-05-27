// 1 - 100까지 추력하기 (더하기) 5050

// 1. while
let i = 0;
let s = 0;
while (++i < 101) s += i;
console.log(s);

i = 0;
let sum = 0;
while(i < 100) {
    i = i+1;
    sum = sum + i;
}
console.log(sum);


// 2. for
s = 0
for (let i = 1; i <= 100; i++) s += i;
console.log(s);

sum = 0;
for (let i = 0; i < 100; i++){
    sum = sum + i + 1;
}
console.log(sum);