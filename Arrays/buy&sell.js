let arr = [1,2,3,4,5]
// Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.
let buy = arr[0]
let profit = 0;
for(let i=0; i<arr.length; i++){
  if(buy>arr[i]){
    buy = arr[i]
    if(arr[i+1]>buy){
      profit += arr[i+1] - arr[i]
      buy = profit
    }
  } 
}
console.log(profit); 