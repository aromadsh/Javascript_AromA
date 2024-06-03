const assert = require('assert');              
const arr = [1, 2, 3, 4];

var push = (array, ...rest) => {
    const arr_len = array.lenght;
    return array + [,...rest];
}


assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]); 
// assert.deepStrictEqual(pop(arr), 4); 
// assert.deepStrictEqual(pop(arr, 2), [3, 4]);    // 2개 팝!
// assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
// assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);
// assert.deepStrictEqual(shift(arr), [2, 3, 4]); 
// assert.deepStrictEqual(shift(arr, 2), [3, 4]);
// assert.deepStrictEqual((arr),[1, 2, 3, 4]); 