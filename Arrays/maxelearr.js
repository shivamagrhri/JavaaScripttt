let arr = [10,45,98,56,24,106,36,41];
let max = arr[0];
for(let i=1; i<arr.length; i++){
  if(max<arr[i]){
    max = arr[i];
  }
}
console.log(max);
