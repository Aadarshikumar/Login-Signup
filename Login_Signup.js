
const fs = require('fs');
const input = require('readline-sync');

console.log("1. press 1 for your Sign-up \n2. Press 2 for your Log-in");
let opt = input.questionInt("Enter your option: ");
function option(){
    if (opt == 1) {
        return Sign_up();
    }
    else if (opt == 2) {
        return Log_in();
    }
    else{
        console.log("Please enter valid input.");
        return
    }
}
option();

// FOR SIGN_UP
function Sign_up() {
    if (fs.existsSync("Aadi.txt")) {
        let file = fs.readFile("Aadi.txt", "utf-8", (err, data) => {
            let name = input.question("Enter you Name: ");
            let email = input.question("Enter you E-mail: ");
            if (data.includes(email)) {
                console.log("You have already Sign-up, please Log-in");
            }
            else {
                let password = input.question("Enter your Password: ");
                fs.appendFile("Aadi.txt", `[${name} ${email} ${password}]\n`, (err, data) => {

                })
            }
        })
    }
    else {
        fs.writeFile("Aadi.txt", '', (err, data) => {
            Sign_up();

        });
    }
}

// FOR LOG-IN
function Log_in(){
    let read = fs.readFile("Aadi.txt", 'utf-8', (err, login_data) => {
        let email = input.question("Enter your E-mail: ");
        let password = input.question("Enter your Password: ");
        if ((login_data.includes(email)) && (login_data.includes(password))) {
            console.log("You have log-in Successfully...");
        }
        else{
            console.log("Your email or may be password is wrong, Please try again...");
        }
    });
}
