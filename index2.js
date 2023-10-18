// Programming Quiz: Even or Odd 
let number = 10;

if (number % 2 == 0) {
    console.log("even");
}
else{
    console.log("odd");
}
number = 13;

if (number % 2 == 0) {
    console.log("even");
}
else{
    console.log("odd");
}

// Programming Quiz: Musical Groups
const musicians = 3;

if (musicians == 1) {
    console.log("Solo");
}
else if(musicians == 2) {
    console.log("Duet");
}
else if(musicians == 3) {
    console.log("Trio");
}
else if(musicians == 4) {
    console.log("Quadruplet");
}
 else if(musicians > 4) {
    console.log("This is a large group");
}
else if(musicians <= 0) {
    console.log("Not a group");
}

// Murder Mystery 
const room = "ballroom";
const suspect = "Mr. Kalehoff";
const weapon = " Knife"
const solved = room && suspect && weapon;

if (solved) {
    console.log(`${suspect} did it in the ${room} with a ${weapon}`)
} else {
    console.log("false")
}

// Chcking your balance
const balance = 900000000;
isActive = true;
checkBalance = true;

if (checkBalance) {
    if (isActive && balance > 0) {
        console.log(`Your balancfalsee is $${balance}`);
    }
    else if (!isActive) {
        console.log("Your account is no longer active.");
    }
    else if (balance == 0) {
        console.log("Your account is empty.");
    }
    else{
        console.log("Your balance is negative, please contact bank.")
    }
}
