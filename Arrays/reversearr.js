let arr = [10,20,30,40,50];
// let reverse = new Array(arr.length)
/*for(let i=0; i<arr.length; i++){
  reverse.unshift(arr[i])
}
console.log(reverse);*/
/*let j = 0;
for(let i=arr.length-1; i>=0; i--){
  reverse[j] = arr[i]
  j++;
}
console.log(reverse);*/

let i = 0, j = arr.length-1;
while(i!=j){
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
  i++
  j--
}
console.log(arr);


