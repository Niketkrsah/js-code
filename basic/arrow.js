// const user ={
//     price:999,
//     username:"Niket",
//     welcomeMessage:function(){
//         console.log(`${this.username},welcome to website`); 

//     }
// }
// user.welcomeMessage();
// user.username="sas"
// user.welcomeMessage()
// console.log(this) // only work in object not in function


// const chai= function(){
//     let username1="niket"
//     console.log(this.username)
// }
// chai()


// const chai1= ()=>{
//     let username2="niket"
//     console.log(this)
// }
// chai1()

// const addtwo=(num1,num2) =>{
//     return num1+num2
// }
// console.log(addtwo(3,4))


// // Implicity return
// const addtwo=(num1,num2) =>(num1+num2)

//console.log(addtwo(3,4))

const addtwo=() =>({username: "niket"})/// for object return using parenthesis
console.log(addtwo())

