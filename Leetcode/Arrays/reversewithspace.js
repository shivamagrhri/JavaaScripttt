let arr = [1,2,3,4,5]
let reverse = new Array(arr.length)
let j = 0
for(let i=arr.length-1; i>=0; i--){
  reverse[j] = arr[i]
  j++
}
console.log(reverse);
