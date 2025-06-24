const name = "pulkit";
const repoCount = 5;

console.log(`hello my name is ${name} and my repo Count is ${repoCount}`);

// Declare String

const gameName = new String ('Pulkit-C-Sushrendra')

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));

console.log(gameName.indexOf('l'));

//=============================================================================================================

// const gameName = new String ('Pulkit-C')

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,2);
console.log(anotherString);

const newOne = "     pulkit     "
console.log(newOne);
console.log(newOne.trim());

const url = "https://pulkit383882%20google.com"
console.log(url.replace('%20','-'));

console.log(url.includes('pulkit'));//true

console.log(url.includes('yahoo'));//false

//Brfore
// const gameName = new String ('Pulkit-C')

// After
// const gameName = new String ('Pulkit-C-Sushrendra')


console.log(gameName.split('-'));


// console.log(gameName.);
