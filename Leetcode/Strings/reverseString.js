let s = "Shivam"

//1st method
for(let i=s.length-1; i>=0; i--){
  process.stdout.write(s[i])
}

//2nd method
let rev = ""
for(let i=s.length-1; i>=0; i--){
  rev = rev + s.charAt(i)
}
console.log(rev);
