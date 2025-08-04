let arr = [2, 0, 2, 1, 1, 0]
let i = j = 0
let k = arr.length - 1
while (i <= k) {
  if (arr[i] == 0) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    i++
    j++
  }
  else if (arr[i] == 2) {
    let temp = arr[i]
    arr[i] = arr[k]
    arr[k] = temp
    k--
  } else {
    i++
  }
}
console.log(arr);
