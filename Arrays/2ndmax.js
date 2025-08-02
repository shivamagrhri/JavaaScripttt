let arr = [45,98,56,24,106,10,36,41];
let fMax = Math.max(arr[0],arr[1]);
let sMax = Math.min(arr[0],arr[1]);
for(let i=2; i<arr.length; i++){
  if(fMax<arr[i]){
    sMax = fMax;
    fMax = arr[i];
  }else if(arr[i]>sMax && fMax != arr[i]){
    sMax = arr[i];
  }
}
console.log(sMax);
