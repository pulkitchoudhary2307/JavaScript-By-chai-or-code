function SayMyName(Name) {
console.log("p");
console.log("u");
console.log("l");
console.log("k");
console.log("i");
console.log("t");
}
SayMyName();
// Add two Number

function addTwoNum (num1,num2){
    console.log(num1 + num2)
}
addTwoNum(9,3);

// proper format for declaration of function

function AddTwoNumber (num1, num2){
    let result = num1 + num2 
    return result
}

const result = AddTwoNumber(5,6)
console.log("result:",result);


// Function

function loginUser (username){
    if (username === undefined)
        console.log ("please enter the name");
    return
}
console.log ("just logged in")

console.log(loginUser())