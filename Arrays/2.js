let prompt = require('prompt-sync')();
let arr = new Array(5)
for(let i=0; i<arr.length; i++){
  arr[i] = Number(prompt("Enter the value: "))
}
console.log(arr);
