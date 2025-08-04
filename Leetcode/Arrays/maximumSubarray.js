let arr = [5,4,-1,7,8]
let max = -Infinity;
let sum = 0
for(let i=0; i<arr.length; i++){
  sum += arr[i]
  max = Math.max(sum, maxSum)
  if(sum<0){
    sum = 0
  }
}
console.log(max);
