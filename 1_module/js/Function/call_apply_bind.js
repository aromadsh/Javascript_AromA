function f() {
    const id = 1;
    console.log('this.id=', this.id);
}

globalThis.id = 'globalThis';
this.id = 'module this';

f();
// => 함수는 상위 변수에 영향이 미침
const f2 = () => {
    // this.id = globalThis.id //강제로 글로벌 값 끌고 오기
    console.log('this.id=', this.id);
}

f2();

// f.bind({ id : 1, name 'Hong'})();
const user = { id : 1, name : 'Hong'};

const newF = f.bind(user);
newF();

f.call(user);
f.apply(user);


function f(x, y) {
    const id = 1;
    console.log(this.id);
    console.log(x, y);
}

newF(1, 11);
f.call(user, 2, 22);
f.apply(user,[ 3, 33]); // apply는 배열로 보내야 함!
f(4, 44);

const f3 = () => console.log(this.id);

f3.call(user, 5, 55);
f3.apply(user, [6, 66]);


