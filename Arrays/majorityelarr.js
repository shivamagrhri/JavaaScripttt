let arr = [3,2,3]
let ans = arr[0];
let count = 1;
for(let i=0; i<arr.length; i++){
  if(count == 0){
    ans = arr[i]
    count = 1
  }
  else if(arr[i] == ans){
    count++
  }
  else{
    count--
  }
}
console.log(ans);
