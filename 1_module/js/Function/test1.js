// 고차 함수

const f2 = (f) => (...args) => console.log(f.name, f(...args));

f2(Math.max)(1, 2, 3, 4, 5);

function ff(t, ...args) {
    return function () {
        console.log(t.name, t(...args));
    }
}

ff(Math.max, 1, 2, 3, 4, 5)();

// 고차 함수 다른 사례

const fns = [Math.max, Math.min];
for (const f of fns) {
    console.log(f.name, f(1, 3, 5));
}

// 고차 함수 다른 사례

const arr = [1, 2, 3, 4, 5];
Array.prototype.first = function () {
    return this[0];
};
Array.prototype.last = function () {
    return this[this.length -1];
};
console.log(arr.first(), arr.last());