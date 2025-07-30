var n = Number(prompt("Enter your number: "))

if(isNaN(n)){
  console.log("Invalid Input"); 
}else{
  if(n>0){
    var sum = 0;
    for(var i=1; i<=n; i++){
      sum += i;
    }
    console.log(sum)
  }else{
    console.log("should be +ve & more than 0");
  }
}
