let amount = Number(prompt("Enter the amount"))
// let amount = 12000;
let dis = 0;

if(amount>0 && amount<=5000){
  dis = 0
}else if(amount>5000 && amount <=7000){
  dis = 5
}else if(amount>7000 && amount <=9000){
  dis = 10
}else if (amount > 9000){
  dis = 20
}else{
  console.log("Wrong input")
}
console.log(amount - Math.floor((dis*amount)/100));