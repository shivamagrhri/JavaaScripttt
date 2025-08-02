let arr = [1,2,3,4,5] //2 - [4,5,1,2,3]
let temp = new Array(arr.length)
let prompt = require('prompt-sync')();
let k = Number(prompt("Enter your steps: "))
k = k%arr.length;
for(let i=0; i<arr.length; i++){
  temp[(i+k)%arr.length] = arr[i]
}
console.log(temp);
