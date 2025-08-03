let arr = [10,20,30,40,50]
let i=arr.length-1
let j=0
while(i>=j){
  temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
  i--
  j++
}
console.log(arr);
