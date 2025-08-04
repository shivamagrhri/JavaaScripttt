let prompt = require('prompt-sync')();
let s = prompt("Enter a string: ");
let toggle = ""
for(let i=0; i<s.length; i++){
  let ch = s.charCodeAt(i)
  if(ch>=65 && ch<=90){
    toggle += String.fromCharCode(ch + 32)
  }
  else if(ch>=97 && ch<=122){
    toggle += String.fromCharCode(ch - 32)
  }
}
console.log(toggle);

// A-65, a-97 -> 32
// B-66, b-98 -> 32
