let amount = 5001
// 4823/500
// 4823%500

if(amount>=500){
  console.log("500 x",Math.floor(amount/500));
  amount = amount%500  
}
if(amount>=200){
  console.log("200 x",Math.floor(amount/200))
  amount = amount%200
}
if(amount>=100){
  console.log("100 x",Math.floor(amount/100))
  amount = amount%100
}
if(amount>=50){
  console.log("50 x",Math.floor(amount/50))
  amount = amount%50
}
if(amount>=20){
  console.log("20 x",Math.floor(amount/20))
  amount = amount%20
}
if(amount>=10){
  console.log("10 x",Math.floor(amount/10))
  amount = amount%10
}
if(amount>=5){
  console.log("5 x",Math.floor(amount/5))
  amount = amount%5
}
if(amount>=2){
  console.log("2 x",Math.floor(amount/2))
  amount = amount%2
}
console.log("1rs Coins x", amount)


