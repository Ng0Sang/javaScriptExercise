//1. Programming Quiz: Even or Odd 
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

//2. Programming Quiz: Musical Groups
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

//3. Murder Mystery 
let room = "dinning room";
let suspect = "Mr. Parkes";
let weapon = " ";
let solved = false;


if (room == "dinning room") {
    weapon = "Knife";
}
else if (room == "billiards room") {
    weapon = "pool stick";
}
else if (room == "gallery") {
    weapon = "trophy";
}
else if (room == "ballroom") {
    weapon = "poison";
}


if (suspect == "Mr. Parkes" && room == "dinning room" ) {
    solved = true;
} else if(suspect == "Ms. Van Cleve " && room == "gallery" ) {
    solved = true;
}
else if(suspect == "Mrs. Sparr" && room == "billiards room" ) {
    solved = true;
}
else if(suspect == "Mr. Kalehoff" && room == "ballroom" ) {
    solved = true;
}

if (solved) {
    console.log(`${suspect} did it in the ${room} with the ${weapon}!`)
}

//4. Checking your balance
const balance = 900000000;
isActive = true;
checkBalance = true;

if (checkBalance) {
    if (isActive && balance > 0) {
        console.log(`Your balance is $${balance}`);
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

//5. Ice cream
let flavor = "vanilla";
let vessel = "bowl";
var toppings = "peanuts";

if (flavor == "vanilla" && vessel == "cone" && toppings == "sprinkles") {
    console.log(`I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}.`)
}

else if (flavor == "vanilla" && vessel == "cone" && toppings == "peanuts") {
    console.log(`I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}.`)
}

else if (flavor == "vanilla" && vessel == "bowl" && toppings == "sprinkles") {
    console.log(`I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}.`)
}

else if (flavor == "vanilla" && vessel == "bowl" && toppings == "peanuts") {
    console.log(`I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}.`)
}

else if (flavor == "chocolate" && vessel == "cone" && toppings == "sprinkles") {
    console.log(`I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}.`)
}

else if (flavor == "chocolate" && vessel == "cone" && toppings == "peanuts") {
    console.log(`I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}.`)
}

else if (flavor == "chocolate" && vessel == "bowl" && toppings == "sprinkles") {
    console.log(`I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}.`)
}

else if (flavor == "chocolate" && vessel == "bowl" && toppings == "peanuts") {
    console.log(`I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}.`)
}

else {
    console.log(" ")
}

//6. What do i wear?
var shirtWidth = 19;
var shirtLength = 28;
var shirtSleeve = 8.31;

if (shirtWidth >= 18 && shirtWidth < 20 && shirtLength >= 28 && shirtLength < 29 && shirtSleeve >= 8.13 && shirtSleeve < 8.38) {
  console.log("S");
} 
else if (shirtWidth >= 20 && shirtWidth < 22 && shirtLength >= 29 && shirtLength < 30 && shirtSleeve >= 8.38 && shirtSleeve < 8.63) {
  console.log("M");
} 
else if (shirtWidth >= 22 && shirtWidth < 24 && shirtLength >= 30 && shirtLength < 31 && shirtSleeve >= 8.63 && shirtSleeve < 8.88) {
  console.log("L");
} 
else if (shirtWidth >= 24 && shirtWidth < 26 && shirtLength >= 31 && shirtLength < 33 && shirtSleeve >= 8.88 && shirtSleeve < 9.63) {
  console.log("XL");
} 
else if (shirtWidth >= 26 && shirtWidth < 28 && shirtLength >= 33 && shirtLength < 34 && shirtSleeve >= 9.63 && shirtSleeve < 10.13) {
  console.log("2XL");
}
 else if (shirtWidth >= 28 && shirtWidth < 30 && shirtLength >= 34 && shirtLength < 35 && shirtSleeve >= 10.13 && shirtSleeve < 10.63) {
  console.log("3XL");
} else {
  console.log("NA");
}


    // 7 Navigating the food chain
    let eatPlants = true
    , eatAnimals = false;

    let category = (eatPlants == true && eatAnimals == false)? "This animal is an herbivore": 
                    (eatPlants == false && eatAnimals == true )? "This animal is a carnicore": 
                    (eatPlants == true && eatAnimals == true)? "This animal is an omnivore": 
                    (eatPlants == false && eatAnimals == false)? "This animal is undefined": " ";

    console.log(category);

// 8 Back to school
let education = "a high school diploma"
, salary = "$35,256/year";

switch (salary) {
    case ('$25,636/year'):
        console.log(`In 2015, a person with ${education} earned an average of ${salary}.`)
        break;
    case ('$35,256/year'):
        console.log(`In 2015, a person with ${education} earned an average of ${salary}.`)
        break;
    case ('$41,496/year,'):
        console.log(`In 2015, a person with ${education} earned an average of ${salary}.`)
        break;
    case ('$59,124/year'):
        console.log(`In 2015, a person with ${education} earned an average of ${salary}.`)
        break;
    case ('$69,732/year'):
        console.log(`In 2015, a person with ${education} earned an average of ${salary}`)
        break;
    case ('$89,960/year'):
        console.log(`In 2015, a person with ${education} earned an average of ${salary}.`)
        break;
    case ('$84,396/year'):
        console.log(`In 2015, a person with ${education} earned an average of ${salary}.`)
        break;

    default:
        console.log("This case is undefined.")
        break;
}