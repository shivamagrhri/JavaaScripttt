// inverted right angle triangle
let prompt = require('prompt-sync')();
let n = Number(prompt("Enter a number: "))
for(let i=1;i<=n;i++){
  for(let j=n;j>=i;j--){
    process.stdout.write("* ")
  }
  console.log();
}