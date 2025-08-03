let prompt = require('prompt-sync')();
let k = Number(prompt("Enter the number of steps: "))
let arr = [1,2,3,4,5] 
k=k%arr.length
for(let j=1; j<=k; j++){
  copy = arr[0]
  for(let i=0; i<arr.length-1; i++){
   arr[i] = arr[i+1]
}
arr[arr.length-1] = copy
}
console.log(arr);
