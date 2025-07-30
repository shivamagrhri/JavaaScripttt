var pr = prompt("Enter your number: ");
if (pr === null) {
  console.log("Cancelled")
} else {
  var n = Number(pr)
  if (isNaN(n)) {
    console.log("Invalid Input");
  } else {
    if (n > 0) {
      var sum = 0;
      while (n > 0) {
        var rem = n % 10;
        sum = sum + rem;
        n = Math.floor(n / 10);
      }
      console.log(sum)
    }
    else {
      console.log("should be +ve & more than 0");
    }
  }
}

