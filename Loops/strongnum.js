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
      var copy = n;
      while (n > 0) {
        var rem = n % 10;
        var fact = 1;
        for (var i = 1; i <= rem; i++) {
          fact = fact * i;
        }
        sum = sum + fact;
        n = Math.floor(n / 10);
      }
      if (copy === sum) {
        console.log("Strong")
      } else {
        console.log("Not Strong")
      }
    }
    else {
      console.log("should be +ve & more than 0");
    }
  }
}

