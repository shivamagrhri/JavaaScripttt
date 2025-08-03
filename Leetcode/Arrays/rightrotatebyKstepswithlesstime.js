let arr = [1,2,3,4,5]
let rotate = new Array(arr.length)
let prompt = require('prompt-sync')();
let k = Number(prompt("Enter the number of steps: "))
k=k%arr.length
for(let i=0; i<arr.length; i++){
  rotate[(i+k)%arr.length] = arr[i]
}
console.log(rotate);
