let i = 5;

while (i > 0) {
    console.log("🚀 ~ i:", i);
    i -= 1;
}


i = 5;
while (i-- > 0) console.log("🚀 ~ i:", i);


i = 5;
do {
    console.log("🚀 ~ i:", i);
} while (i-- > 1);


for (let j = 1; j <= 5; j++) {
    console.log(j);
}

for (let j = 5; j > 0; j--) {
    console.log(j);
}


const arr = [2, 3, 5, 7, 11];

for(let i = 0; i < arr?.length; i++) {
    console.log(`arr[${i}] : `, arr[i]);
}

for(const t of arr) {
    console.log(t);
}

const user = { id : 1, name : 'Hong'};
for(const p in user) {
    console.log(user[p]);
}

const WEEK_NAMES = '월화수목금토일';
for (const w of WEEK_NAMES) {
    console.log(w);
}