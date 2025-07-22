//["" "" "" ""]
//[{} {} {}]

// const arr = [1,2,3,4,5,6]

// for (const num of arr) {
//     console.log(num);
    
// }

const greetings = "Hello World!"
for (const words of greetings) {
    console.log(`Each word is ${words}`)
}

const map = new Map();
map.set("name", "pulkit");
map.set("age", 20);
map.set("country", "India");
map.set("age", 20); //that are doesnot conent dublicate value and key

// console.log(map);

for (const [personal,details] of map) {
    console.log(personal, ':-', details);
    
}

const myObject = {
    city1: 'nagpur',
    city2:'badoda',
}

// for (const [personal,details] of Object){
//     console.log(personal, ':-', details); 
// } does not work