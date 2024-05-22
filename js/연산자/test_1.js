for(let i = 0.1; i < 1; i += 0.1){
    console.log(i.toFixed(1));
}


// 1 - 100까지 추력하기 (더하기) 5050

// 1. while
let i = 0;
let s = 0;
while (++i < 101) s += i;
console.log(s);


// 2. for