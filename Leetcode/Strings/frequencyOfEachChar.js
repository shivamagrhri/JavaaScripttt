// for example
//hello
// -> h-1
// -> e-1
// -> l-2
// -> o-1
let prompt = require('prompt-sync')();
let s = prompt("Enter a string: ");
let arr = new Array(128).fill(0);
for(let i=0; i<s.length; i++){
  let idx = s.charCodeAt(i);
  arr[idx] = arr[idx] + 1
    if(arr[idx]>0){
    console.log(String.fromCharCode(idx)+" appears at "+ arr[idx]+" times")
  }
}



