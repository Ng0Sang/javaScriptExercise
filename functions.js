//Is else required?
"Else is not required, the function the same way"


//Rewrit using the "?" and the "||" operator
// With the ?
function checkAge(age) {
    let checkAge = (age < 18) ? "true": confirm("Did your parents allow you?")
    return checkAge;
}
checkAge(17);

// With the ||
function checkAge(age) {

    let checkAge = age < 18 || confirm("Did your parents allow you?")
    if (checkAge) {
        return checkAge;
    } 
}
checkAge(27);

// Function to return the min of two numbers
function minOfTwoNumbers(a, b) {
   if (a < b) {
    console.log(`The minimum number is ${a}`)
   }
   else{
    return b;
   }
}
minOfTwoNumbers(3,2);

// Rewrite using arrow functions
let ask = (question, yes, no) => {
    if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution.");  
}
)