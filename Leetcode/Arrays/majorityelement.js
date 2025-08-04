let arr = [2,2,1,1,1,2,2]
ans = arr[0]
count = 1
for(let i=0; i<arr.length; i++){
  if(count == 0){
    ans = arr[i]
    count = 1
  }
  else if(ans = arr[i]){
    count++
  }
  else count--
}
console.log(ans);
