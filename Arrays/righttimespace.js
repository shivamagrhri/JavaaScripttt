let arr = [1, 2, 3, 4, 5];
let prompt = require('prompt-sync')();
let k = Number(prompt("Enter your steps: "))
k = k % arr.length
function reverse(i,j){
  while(i<j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    i++
    j--
  }
}
reverse(0,arr.length-1)
reverse(0,k-1)
reverse(k, arr.length-1)
console.log(arr);
