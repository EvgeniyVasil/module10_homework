let x;
let y = (typeof x);

if (y == 'number'){
    console.log("x - Number");
} else if (y == 'string') {
    console.log("x - String");
} else if (y == 'boolean') {
    console.log("x - Boolean");
} else {
    console.log("x - undefined");
}

