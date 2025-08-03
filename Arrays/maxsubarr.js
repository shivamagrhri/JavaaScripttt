let arr = [5,4,-1,7,8]
let sum = 0;
let max = -Infinity;
for(let i=0; i<arr.length; i++){
  sum += arr[i]
  max = Math.max(sum, max)
  if(sum<0){
      sum = 0
    }
}
console.log(max);
