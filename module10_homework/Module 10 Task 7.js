let arr = [3, 8, 'd', null, 'e', null];
let count_Null = 0;
let count_Even = 0;
let count_Odd = 0;
let count_Other = 0;

for (let i = 0; i < arr.length; i++) { 
  if (arr[i] === null) {
    count_Null++;
      } else {
        if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
            count_Other++;
        } else {
            if (arr[i] % 2 === 0) {
                count_Even++;
            } else {
                count_Odd++;
            }
        }
    }
}
console.log("Null: " + count_Null);
console.log("Even: " + count_Even);
console.log("Odd: " + count_Odd);
console.log("Other: " + count_Other);

