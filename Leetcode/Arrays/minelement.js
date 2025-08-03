let arr = [10, 2, 78, 100, 4, 1]
let min = arr[0]
for(let i=1; i<arr.length; i++){
  min = Math.min(min, arr[i])
}
console.log(min);
