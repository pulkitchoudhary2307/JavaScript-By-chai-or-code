// addone (5)
// function addone(num){
//     return num + 1
// }

// // expantion declartion of an variable.

// addtwo (5) // error because brfoe declartion
// const addtwo = function (num){
//     return num + 2 
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Arrow Function 

// Agar Current me kisi ka name Change krna ho to (this) function ke wjaha se name ko change kiya ja skta hain 

// {this = curent constext}


const user ={
    username : "pulkit",
    price : 999,

wellcomeMessage:function () {
    console.log(`${this.username}, wellcomeMessage to wedsite`);
    console.log(this)  //current cont       
    
}
}

user.wellcomeMessage
user.username =" pkt Studio "
user.wellcomeMessage()

console.log(this); 
