let x = +prompt ("please enter a number");
alert (typeof x);
if (x% 2 ===0) {
  console.log ("the number is even");
}
else if (x%1 ===0) {
  console.log ("the number is odd");
}
else {
  alert("Oops, you might be mistaking");
}
if (isNaN(x)) {
  alert ("result is NaN")
  }