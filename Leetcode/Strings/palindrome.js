let prompt = require('prompt-sync')();
let s = prompt("Enter the word: ")

//1st Method

let rev = ""
for (let i = s.length - 1; i >= 0; i--) {
  rev = rev + s.charAt(i)
}
if (rev == s) {
  console.log("Palindrome");
}
else {
  console.log("Not Palindrome")
}

//2nd Method with less space complexity
let i = 0
let isPalindrome = true
let j = s.length-1
while(i<j){
  if(s.charAt(i) != s.charAt(j)){
    isPalindrome = false
    break
  }else{
    i++
    j--
  }
}
if(isPalindrome) console.log("Palindrome");
else console.log("No Palindrome")


