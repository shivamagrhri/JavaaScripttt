// perfect triangle
let prompt = require('prompt-sync')();
let a = prompt("Enter a number ");
for(let i= 1;i<=a;i++){
  for(let j= a;j>i;j--){
    process.stdout.write(" ");
  }
  for(let j= 1;j<=i;j++){
    process.stdout.write("* ");
  }
  for(let j= 1;j<=i-1;j++){
    process.stdout.write("* ");
  }
  console.log();
}