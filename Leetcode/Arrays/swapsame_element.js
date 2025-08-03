let arr = [1, 1, 0, 1, 0, 1, 1, 0, 0]
let i = j = 0;
while (i < arr.length) {
  if (arr[i] == 0) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    j++
    i++
  } else {
    i++
  }
}
console.log(arr);
