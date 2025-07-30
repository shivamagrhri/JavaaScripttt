var pr = prompt("Enter your number: ");
if (pr === null) {
  console.log("Cancelled")
} else {
  var n = Number(pr)
  if (isNaN(n)) {
    console.log("Invalid Input");
  } else {
    if (n > 0) {
      var isPrime = true;
      for(var i=2; i<=Math.floor(n/2); i++){
        if(n%i === 0){
          isPrime = false;
          break;
        }
      }
      console.log(isPrime)
    } 
    else {
      console.log("should be +ve & more than 0");
    }
  }
}

