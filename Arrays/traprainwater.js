let arr = [0,1,0,2,1,0,1,3,2,1,2,1]
let left = new Array(arr.length)
let right = new Array(arr.length)
let maxLeft = arr[0]
let maxRight = arr[arr.length-1]
left[0] = maxLeft
right[arr.length-1] = maxRight
let ans = 0
for(let i=1; i<arr.length; i++){
  maxLeft = Math.max(maxLeft, arr[i])
  left[i] = maxLeft
} 
for(let i=arr.length-2; i>=0; i--){
  maxRight = Math.max(maxRight, arr[i])
  right[i] = maxRight
} 
for(let i=0; i<arr.length; i++){
  ans += Math.min(left[i], right[i]) - arr[i]
}
console.log(ans);
