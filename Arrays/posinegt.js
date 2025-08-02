let arr = [21,-5, -7, 32, -3, 51, 52]
let i = 0, j = 0;
for(let i=0; i<arr.length; i++){
  if(arr[i] < 0){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    j++
  }
}
console.log(arr);
