let arr = [1,2,3,4,5]
let maxProfit = 0
for(let i=0; i<arr.length; i++){
  let profit = 0
  profit = arr[i+1] - arr[i]
  if(profit>0){
    maxProfit += profit
  }
}

console.log(maxProfit);

