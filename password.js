const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

//password stuff
  console.log("Welcome to the password verifier\n")
rl.question('Please Enter your password: ', (answer) => {
    if (answer.length < 10){
        console.log("You failed")
    } else {
        console.log("nice password bud")
    }
    rl.close()
})