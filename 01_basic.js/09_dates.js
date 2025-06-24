let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreateData = new Date (7-23-2004)
console.log(myCreateData.toLocaleDateString());

let myTimestamp = Date.now();

console.log(myTimestamp);
console.log(myCreateData.getTime());
console.log(Date.now());
console.log(Math.floor(Date.now()/1000));



let newDate = new Date ();
console.log(newDate);
console.log(myDate.getMonth);
console.log(myDate.getDay);


`${newDate.getDate()}`

newDate.toLocaleDateString('Default',{weekday:"long"})