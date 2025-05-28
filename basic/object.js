
// // const mysymbol="key1"
// // const user={
// //     name:["niket kumar","saket"],
// //     id:"22bcs057",
// //     [mysymbol]:"key2",
// //     email: "niketkrsah@Gmail.com",
// //     "logged":["moday","tuesday"]
// // }

// // console.log(user.email)
// // console.log(user["email"]); //most using method
// // console.log(user["logged"]);
// // console.log(user[mysymbol])
// // user.email="saketkrsah@gmail.com"//changing value
// // console.log(user["email"])
// // Object.freeze(user)//no chnge possible after that
// // user.email="nik"
// // // console.log(user.email)/// not changed after freez
// //  user.greeting= function(){
// //     console.log("hello");

// //  }
// //  user.greeting2= function(){
// //     console.log(`hello,${this.name},${this.email}`);

// //  }
// //  user.greeting()
// //  user.greeting2()

// const tinderuser=new Object()
// tinderuser.id="123abc"
// tinderuser.name="sammy"
// tinderuser.isloggedin=false
// // console.log(tinderuser)


// // const regular_user={
// //     email:"ankit@gmail.com",
// //     fullname:{
// //         userfullname:{
// //             firstname:"niket",
// //             lastname:"kumar"
// //         }
// //     }
// // } 
// // console.log(regular_user.fullname.userfullname)

// const obj1={1:"a",2:"b"}
// const obj2={3:"c",4:"d"}
// const obj4=Object.assign({},obj1,obj2)///add in one object
// const obj3={...obj1,...obj2}///add in one object
// console.log(obj3)
// console.log(obj4)

// const users=[
//     {id:1,name:"niket"},
//     {id:2}
// ]

// console.log(users[0].id)
// console.log(tinderuser)
// console.log(Object.keys(tinderuser)) //give in array form 
// console.log(Object.keys(users))
// console.log(Object.keys(obj3))
// console.log(Object.keys(obj4))

// console.log(Object.values(tinderuser)) //give in array form 
// console.log(Object.values(users))
// console.log(Object.values(obj3))
// console.log(Object.values(obj4))

// console.log(Object.entries(tinderuser)) //give all in array and key are also in array like nested array
// console.log(Object.entries(users))//array inside array then object 
// console.log(Object.entries(obj3))
// console.log(Object.entries(obj4))

// console.log(tinderuser.hasOwnProperty("isloggedin")) // for checking present or not





//De-Structure
const course={
    coursename:"javascript",
    price:"999",
    courseinstructor:"niket"
}

//1st method
const {courseinstructor}=course
console.log(courseinstructor)
// 2nd
const{courseinstructor:instr}=course
console.log(instr)