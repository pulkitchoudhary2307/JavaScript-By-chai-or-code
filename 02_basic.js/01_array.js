const myArr = [70,51,20,73,14];
const heros = ["pkt", 20 , "Sushrendra", 45,"Rohit", 18];
console.log(myArr,heros);

const myArr2 = new Array(7,5,0,7,1);

console.log(myArr[3]);


//======================================================================================


myArr.push(6);
console.log(myArr)

myArr.pop();//delete from last 
console.log(myArr);

myArr.unshift(9);//add from first
console.log(myArr);

myArr.shift();// remove from first
console.log(myArr);

console.log(myArr.includes(9));

console.log(myArr.indexOf(1)); //give me Randomly Positive number for true

//==============================================================================================
  
// * join method 
// const newArr = myArr.join();  // convert in string 
// console.log(myArr);

// console.log(newArr); 


// ================================================================================================

//* slice and Splice

console.log("A", myArr);

const myn1 = myArr.slice(2,4); // choice kr ke dete hain 
console.log(myArr);
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(2,4); // choice kr ke dete hain 
console.log("Jo bach Gye hainBahar aayge" ,myArr);
console.log("Bahar aayge", myn2);

console.log(myArr);
console.log(myn2)