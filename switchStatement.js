//SWITCH STATEMENTS
let browser = "Edge";


if (browser == "Edge") {
    console.log("You've got the Edge");
} else if(browser == 'Chrome' || 'Firefox' || 'Safari' || 'OPera'){
    console.log("Okay we support these browsers too");
}
else{
    console.log("We hope that this page looks ok!")
}


//Rewrite "if" into "switch"
let a = 2;

switch (a) {
    case 0:
        console.log(0);
        break;
    case 1:
        console.log(1);
        break;
    case 2 :
    case 3:
        console.log(2, 3);
        break;

    default:
        break;
}