let ans = Number(prompt("What is your age: "))
// let ans = 19

if (isNaN(ans)){
  console.log("Invalid input")
}
else if(ans>=18){
  console.log("You can vote");
}
else{
  console.log("You can not vote");
}