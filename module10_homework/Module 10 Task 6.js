let arr = ['a', 1, 'c', 'd'];
let sameType = true;
for (let x = 0; x < arr.length - 1; x++){
    for (let y = x + 1; y < arr.length; y++){
        if (typeof(arr[x]) !== typeof(arr[y])){
            sameType = false;
        }
    }
}
if (sameType) {
    console.log("elements are similar");
} else {
    console.log("elements aren't similar");
}

