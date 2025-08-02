let arr = [45,98,56,24,106,10,10,36,41,17];
let fmin = Math.min(arr[0], arr[1]);
let smin = Math.max(arr[0], arr[1]);
for(let i=2; i<arr.length; i++){
  if(fmin>arr[i]){
    smin = fmin;
    fmin = arr[i]
  }else if(smin>arr[i] && fmin != arr[i]){
    smin = arr[i]
  }
}
console.log(smin);
