globalThis.name = 'GLOBAL';
this.name = 'MODULE';

const obj = {
    name: 'OBJ',
    // property : 키와 밸류가 존재하는 값
    f1: function () { // 함수 선언문
        console.log('f1=', this.name); // 오브젝트 내의 있는 OBJ
    },
    f2: () => { // 화살표 함수
        console.log('f2=', this.name); // 상위 노드 인 MODULE
    },
        //method : 불러올때 obj.f3
    f3() {
        console.log('f3=', this.name); // 오브젝트 내의 있는 OBJ
    },
};


obj.f1();
obj.f2();
obj.f3();
const nm = this.nm;

console.log('------------------------------------', nm);

const f11 = obj.f1;
const f22 = obj.f2;
const f33 = obj.f3;

f11();
f22();
f33();
