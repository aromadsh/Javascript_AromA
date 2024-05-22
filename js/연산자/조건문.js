const three = 4.0;
if (three > 0.3) {
    console.log("OK!");
} else {
    console.log("exists garbage!")
}

const x = 2;
// x가 1이면 one, 2명 two, 3three 그 외 etc
if ( x === 1 ) {
    console.log("one");
} else if ( x === 2 ) {
    console.log("two");
} else if ( x === 3 ) {
    console.log("three");
} else {
    console.log("etc");
}

let outStr = 'etc'
if ( x === 1 ) {
    outStr = "one";
} else if ( x === 2 ) {
    outStr = "two";
} else if ( x === 3 ) {
    outStr = "three";
}
console.log(outStr);

switch (x) {
    case 1 :
        outStr = 'one';
        break;
    case 2 : 
        outStr = 'two';
        break;
    case 3 :
        outStr = 'three';
        break;    
}

OutStr = x === 1 ? 'one' : (x === 2 ? 'two' : ( x === 3 ? 'three' : 'etc'));
console.log(outStr);