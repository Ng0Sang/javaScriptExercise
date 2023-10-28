//What is the last value alearted by the code?
"The last value alerted is 0, because it is decrementing 3 three times"

//Which value does the while loop shows?
//For prefix form ++1;
"The value is 1 to 4"

//For prefix form i++
"The value is 1 to 5"

//Output even numbers
for (let i = 2; i <= 10; i+=2) {
   console.log(i) 
}


//Replace FOR with WHILE
let i = 0;
while (i < 3 ) {
    console.log(`Number ${i}!`)
    i++;
}

//Repeat until the input is correct
do {
    let output = alert("Enter a number: ");
    if (output < 100) {
        alert('Please insert a number greater than 100:')
    }
} while (output < 100){
    output++;
}


//Output prime numbers
let n = 20;
for (let i = 0; i <= n ; i++) {
    console.log(i);
}
