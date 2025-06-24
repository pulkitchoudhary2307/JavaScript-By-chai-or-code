const marvel_heros = ["thor","ironman", "spiderman"];
const In_heros = ["Hanuman","shaktiman", "Krish"];

// marvel_heros.push(In_heros)
// console.log(marvel_heros);

// console.log(marvel_heros[3][2]); //index

// const all_heros = In_heros.concat(marvel_heros);
// console.log(all_heros);

// const all_heros = [...marvel_heros,...In_heros];
// console.log(all_heros);

const another_array = [1,2,4,5,3,2,[3,5,3,2,4,[3,4,3,5,3,1]]]
// const linerway = another_array.flat(Infinity);
// console.log(linerway);

// * convert string into array 

console.log(Array.isArray("pulkit")); //false

console.log(Array.from("pulkit")); //[p,u,l,k,i,t]

console.log(Array.from({name:"pulkit"})); //[]

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); //['pulkit']