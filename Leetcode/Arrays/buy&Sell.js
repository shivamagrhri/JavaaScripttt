let arr = [7,6,4,3,1]
let maxProfit = 0
let min = arr[0]
for(let i=0; i<arr.length; i++){
  if(min<arr[i]){
    maxProfit = Math.max(arr[i] - min, maxProfit)
  }else{
    min = arr[i]
  }
}
console.log(maxProfit);
