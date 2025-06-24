// singleton or constructor se kaise define

// const tinder = new Object(); //singleton

const tinder = {}; // non Singleton

// console.log(tinder); // {}

//trick 1
tinder.id = "123abc",
tinder.name = "SomePerson",
tinder.IsloggedIn = false

// console.log(tinder); // {}

// trick 2
const regularUser = {  //Nesting
    email :"Person1@gmail.com",
    contact : "22665655",
    fullName : {
        UserName :{
            firstName : "Pkt",
            LastName : "Choudhary",
        }
    }
}

// console.log(regularUser.fullName);

// console.log(regularUser.fullName?.UserName.LastName);


const obj1 = { 1: "a", 2:"b"}
const obj2 = { 3: "a", 4:"b"}
const obj3 = { 5: "a", 6:"b"}

// const obj4 = {obj1,obj2,obj3}
// console.log(obj4);

// const obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4);

const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);

const User = [  //array
    {
        id : 1,
        email : "abc@gmail.com"
    },
    {
        id : 2,
        email : "xyz@gmail.com"
    },
]


User[1].email

console.log(Object.keys(tinder));
console.log(Object.values(tinder));
console.log(Object.entries(tinder));


//IMP

console.log(tinder.hasOwnProperty("name")); // only keys