// Stack Memory (premative Data Type)

let myYoutube = "pkt"

let anotherYoutube = myYoutube
anotherYoutube = "Mr.mental Guru"

console.log(anotherYoutube);

// heap Memory (Non Premative Data Type)

let userOne = {
    user : "pulkit33",
    email : "pulkit@gmail.com"
}

let userTwo = userOne;

userTwo.email = "pkt@google.com"

console.log(userOne.email);
console.log(userTwo.email);
// node 01_basic/05_stackandheap