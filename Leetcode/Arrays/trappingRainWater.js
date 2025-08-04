let height = [4,2,0,3,2,5]
let left = new Array(height.length)
let right = new Array(height.length)
let leftMax = height[0]
let rightMax = height[height.length-1]
for(let i=0; i<height.length; i++){
  leftMax = Math.max(leftMax, height[i])
  left[i] = leftMax
}
for(let j=height.length-1; j>=0; j--){
  rightMax = Math.max(rightMax, height[j])
  right[j] = rightMax
}
let ans = 0
for(let i=0; i<height.length; i++){
  ans += Math.min(left[i], right[i]) - height[i]
}
console.log(ans)