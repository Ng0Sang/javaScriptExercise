//The postfix and prefix forms
c = 2;
d = 1;

//Assignment result
a = 4;
x = 5;

//Type conversions
1 = "10";
2 =  "-10";
3 = false;
4 = 2;
5 = 6;
6 = "9px";
7 = "$45"
8 = 2;
9 = "4px2";
10 = "-95";
11 = -13;
12 = 1;
13 = undefined;
14 = 2;

//Fix the addition
alert(+a + +b);

//Comparison
1 = true;
2 = false;
3 = true;
4 = true;
5 = false;
6 = false;
7 = false;

//Rewrite if statement
let result = (a + b < 4)? "Below": "Over";

//Rewrite if statement 2
let message = (login == "Employee")? "Hello":
                (login == "Director")? "Greetings":
                (login == "")? "No login": "";

//Result of the OR ||
alert = 2;

//Result of OR 2
alert = 2;

//Resultof AND
alert = null;

//Result of the AND 2
alert = 1;

//Result of OR AND OR
alert = 3;

//Check the range between
if (age >= 14 && age <= 90 ) {
    console.log("You are within the range of ages 14 and 90")
}

//Check the range outside 2
if (!(age >= 14 && age <= 90) ) {
    console.log("You are within the range of ages 14 and 90")
}

//A question about "if"
1 && 3;

//Check the login
let visitor = prompt("Who's there? ");
let password = prompt("Enter your password:")

if (visitor == !("admin")) {
    console.log("I dont know you");
} 
else if (visitor == "admin") {
    if (password == "TheMaster") {
        console.log("Welcome!");
    } else if (password == !("TheMaster") || password == null) {
        console.log("Wrong password");
    } else{
        console.log("Canceled")
        }
}
 else{
    console.log("Canceled")
}

