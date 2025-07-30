var pr = prompt("Enter your number: ");
if (pr === null) {
  console.log("Cancelled")
} else {
  var n = Number(pr)
  if (isNaN(n)) {
    console.log("Invalid Input");
  } else {
    if (n > 0) {
      var fact = 1;
      for (var i = 1; i <= n; i++) {
        fact *= i;
      }
      console.log(fact)
    } else {
      console.log("should be +ve & more than 0");
    }
  }
}

