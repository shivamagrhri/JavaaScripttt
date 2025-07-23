let day = 3
// switch(day){
//   case 1:console.log("Monday");
//   break
//   case 2:console.log("Tuesday");
//   break
//   case 3:console.log("Wednesday");
//   break
//   case 4:console.log("Thursday");
//   break
//   default: console.log("Namaste")
  
// }

switch(day){
  case 1:
  case 2:
  case 3:
    console.log("Monday");
    break
  case 4:
  case 5:
  case 6:
    console.log("Tuesday")
    break
  default:
    console.log("Namaste")
    
}


switch(true){
  case 12>13:
    console.log("Greater")
    break
  case 13>75:
    console.log("False")
    break
  default:
    console.log("Invalid")

}


let num = +(0.1 + 0.2).toFixed(1);
switch(num){
  case 0.3:
    console.log("0.3")
    break
  case 0.5:
    console.log("0.5")
    break
  default:
    console.log("Bye")
}