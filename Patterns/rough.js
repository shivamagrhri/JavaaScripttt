let prompt = require('prompt-sync')();
let n = Number(prompt("Enter the number: "))
// for(let i=1;i<=n;i++){
//   for(let j=1;j<=i;j++){
//     process.stdout.write("* ")
//   }
//   console.log();
// }
// for(let i=1;i<=n;i++){
//   for(let j=1;j<=i;j++){
//     process.stdout.write(j+" ")
//   }
//   console.log();
// }
// for(let i=1;i<=n;i++){
//   let ascii = 65
//   for(let j=1;j<=i;j++){
//     process.stdout.write(String.fromCharCode(ascii)+" ");
//     ascii++
//   }
//   console.log();
// }

// for(let i=1;i<=n;i++){
//   for(let j=1;j<=n-i;j++){
//     process.stdout.write("  ")
//   }
//     for(let j=1;j<=i;j++){
//     process.stdout.write("* ")
//   }
//   console.log();
// }


// for(let i=1;i<=n;i++){
//   for(let j=1;j<=n-i;j++){
//     process.stdout.write("  ")
//   }
//     for(let j=1;j<=i;j++){
//     process.stdout.write("* ")
//   }
//   for(let j=1;j<=i-1;j++){
//     process.stdout.write("* ")
//   }
//   console.log();
// }

//1
/*for(let i=1; i<=n; i++){
  for(let j=1; j<=n; j++){
    process.stdout.write("* ")
  }
  console.log();
}*/

//2
/*for(let i=1; i<=n; i++){
  for(let j=1; j<=i; j++){
    process.stdout.write("* ")
  }
  console.log();
}*/

//3
/*for(let i=1; i<=n; i++){
  for(let j=1; j<=n-i+1; j++){
    process.stdout.write("* ")
  }
  console.log(); 
}*/

//4
/*for(let i=1; i<=n; i++){
  for(let j=1; j<=n-i; j++){
    process.stdout.write("  ")
  }
  for(let j=1; j<=i; j++){
    process.stdout.write("* ")
  }
  console.log()
}*/

//5
/*for(let i=1; i<=n; i++){
  for(let j=1; j<=i; j++){
    process.stdout.write(j+" ")
  }
  console.log()
}*/

//6
/*for(let i=1; i<=n; i++){
  let line = ""
  for(let j=1; j<=n-i; j++){
    line += " ";
  }
  for(let j=1; j<=i; j++){
    line += "* ";
  }
  console.log(line)
}*/

//7
// for(let i=1; i<=n; i++){
//   for(let j=1; j<=i-1; j++){
//     process.stdout.write("  ")
//   }
//   for(let j=1; j<=n-i+1; j++){
//     process.stdout.write("* ")
//   }
//   for(let j=1; j<=n-i; j++){
//     process.stdout.write("* ")
//   }
//   console.log();  
// }

//8
/*for(let i=1; i<=n; i++){
  let line = ""
  for(let j=1; j<=n-i; j++){
    line += " ";
  }
  for(let j=1; j<=i; j++){
    line += j+" ";
  }
  console.log(line)
}*/

//9
/*let count = 1;
for(let i=1; i<=n; i++){
  for(let j=1; j<=i; j++){
    process.stdout.write(count +" ")
    count++
  }
  console.log()
}*/

//10
/*for(let i=1;i<=n;i++){
  for(let j=1;j<=i;j++){
    process.stdout.write("* ")
  }
    for(let j=1;j<=i;j++){
    process.stdout.write("* ")
  }
  console.log()
}*/
/*
for(let i=1;i<=n;i++){
  for(let j=1;j<=n-i;j++){
    process.stdout.write("  ")
  }
  for(let j=1; j<=i; j++){
    process.stdout.write("* ")
  }
    for(let j=1; j<=i-1; j++){
    process.stdout.write("* ")
  }
  console.log()
}*/
/*let m=1
for(let i=1; i<=n; i++){
  for(let j=1; j<=n-i; j++){
    process.stdout.write(" ")
  }
  for(let j=1; j<=m; j++){
    process.stdout.write(j+" ")
  }
  m++;
  console.log()
}*/

/*let m = 1
let count = 1
for(let i=1; i<=n; i++){
  for(let j=1; j<=n-i; j++){
    process.stdout.write(" ")
  }
  for(j=1; j<=m; j++){
    process.stdout.write(count + " ")
    count++
  }
  m++
  console.log();
}*/

/*for(let i=1;i<=n;i++){
  for(let j=1; j<=i-1;j++){
    process.stdout.write("  ")
  }
  for(let j=1; j<=n-i+1; j++){
    process.stdout.write("* ")

  }
  for(let j=1; j<=n-i; j++){
    process.stdout.write("* ")

  }
  console.log()
}*/

/*for(let i=1; i<=n; i++){
  for(let j=1; j<=n-i; j++){
    process.stdout.write("  ")
  }
  for(let j=1; j<=i; j++){
    process.stdout.write("* ")
  }
    for(let j=1; j<=i-1; j++){
    process.stdout.write("* ")
  }
  console.log()
}*/

/*let m=1
for(let i=1; i<=n-1; i++){
  for(let j=1; j<=n-i; j++){
    process.stdout.write("  ")
  }
  for(let j=1; j<=m; j++){
    process.stdout.write("* ")
  }
  m+=2
  console.log()
}

for(let i=1; i<=n; i++){
  for(let j=1; j<=i-1; j++){
    process.stdout.write("  ")
  }
  for(let j=1; j<=n-i+1; j++){
    process.stdout.write("* ")
  }
  for(let j=1; j<=n-i; j++){
    process.stdout.write("* ")
  }
  console.log()
}*/

/*for(let i=1; i<=n-1; i++){
  for(let j=1; j<=i-1; j++){
    process.stdout.write("  ")
  }
  for(let j=1; j<=n-i+1; j++){
    process.stdout.write("* ")
  }
  for(let j=1; j<=n-i; j++){
    process.stdout.write("* ")
  }
  console.log()
}
let m=1
for(let i=1; i<=n; i++){
  for(let j=1; j<=n-i; j++){
    process.stdout.write("  ")
  }
  for(let j=1; j<=m; j++){
    process.stdout.write("* ")
  }
  m+=2
  console.log()
}*/


/*for(let i=1; i<=n; i++){
  // first inverted traingle
  for(let j=1; j<=n-i+1; j++){
    process.stdout.write("* ")
  }
  // for space traingle
  for(let j=1; j<=i-1; j++){
    process.stdout.write("  ")
  }
  // for space triangle
  for(let j=1;j<=i-1; j++){
    process.stdout.write("  ")
  }
  //second inverted traingle
  for(let j=1; j<=n-i+1; j++){
    process.stdout.write("* ")
  }
  console.log()
}

for(let i=1; i<=n-1; i++){
  for(let j=1; j<=i+1; j++){
    process.stdout.write("* ")
  }
  for(let j=1; j<=n-i-1; j++){
    process.stdout.write("  ")
  }
  for(let j=1;j<=n-i-1;j++){
    process.stdout.write("  ")
  }
  for(let j=1; j<=i+1; j++){
    process.stdout.write("* ")
  }
  console.log()
}*/

/*for(let i=1; i<=n; i++){
  for(let j=1; j<=n-i+1; j++){
    process.stdout.write("  ")
  }
  process.stdout.write("* ")
  for(let j=1; j<=i-1; j++){
    process.stdout.write("  ")
  }
  for(let j=1; j<=i-2; j++){
    process.stdout.write("  ")
  }
  if(i !== 1){
  process.stdout.write("* ")
  }
  console.log()
}
for(let i=1; i<=1; i++){
    for(let j=1; j<=2*n+1; j++){
    process.stdout.write("* ")
  }
}*/

/*for(let i=1; i<=n; i++){
  for(let j=1; j<=n; j++){
    if(i==1 || j==1 || i==n || i==j || i+j == 2*n || j==n)
    process.stdout.write("* ")
  }
  console.log()
}*/

let m = 1
for(let i=1; i<=n; i++){
  for(let j=1; j<=i; j++){
    process.stdout.write(m+" ")
    m++
  }
  console.log()
}