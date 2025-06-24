// sigleton in constructor, literal
// object Declar

const mySym = Symbol("Key1");

// object 

const JSuser = {
    name : "pulkt",
    age : 18,
    // mySym :"Key1",//Wrong Way to declsre to Symbols
    [mySym] : "Key1",
    location : "Nagpur",
    email : "pulkit@google.com",
    Islogin : false,
    LastLogin : ["Monday","Tuesday","Saturday"]
}

//print JSuser

// console.log(JSuser.email);
console.log(JSuser["email"]);//proper Tarika 

// console.log(typeof JSuser);

// console.log(JSuser[mySym]);

// JSuser.email = "pkt@google.com";
// console.log(JSuser.email);

// obejct Freeze

// Object.freeze(JSuser);
// console.log(JSuser.email);

// JSuser.email = "ppcc@google.com"; // not run because freeze
// console.log(JSuser.email);

// Function

JSuser.greeting = function(){
    console.log("Hello World");
}

JSuser.greetingTwo = function(){
    console.log(`Hello World, ${this.email}`);
}
console.log(JSuser.greeting);
console.log(JSuser.greetingTwo);