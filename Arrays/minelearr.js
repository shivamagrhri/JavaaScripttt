let arr = [45,98,56,24,106,10,36,41];
let min = arr[0];
for(let i=1; i<arr.length; i++){
  if(min>arr[i]){
    min = arr[i];
  }
}
console.log(min);