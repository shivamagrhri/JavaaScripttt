var pr = prompt("Enter your number: ");
if (pr === null) {
  console.log("Cancelled")
} else {
  var n = Number(pr)
  if (isNaN(n)) {
    console.log("Invalid Input");
  } else {
    if (n > 0) {
      for(var i=1; i<=Math.floor(n/2); i++){
        if(n%i === 0){
          console.log(i)
        }
      }
      console.log(n)
    } else {
      console.log("should be +ve & more than 0");
    }
  }
}

