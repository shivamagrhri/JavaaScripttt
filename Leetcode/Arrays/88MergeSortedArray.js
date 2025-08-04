let arr1 = [1,2,3,0,0,0]
let arr2 = [2,5,6]
// arr1 length -> m+n
// arr2 length -> n
// sorted array must be without extra space in arr1.
m = m-1
n = n-1
let k = arr1.length-1
while(m>=0 && n>=0){
  if(arr1[m]>arr2[n]){
    arr1[k--] = arr2[n--]
  }else{
    arr1[k--] = arr1[i--]
  }
}
while(n>=0){
  arr1[k--] = arr2[n--]
}
console.log(arr1);
