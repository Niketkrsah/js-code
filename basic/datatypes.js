// "use strict";
// //alert(3+3)   //we are not using
// console.log(typeof null)
// let islogged=1
// let booleanislogged = Boolean(islogged)
// console.log(booleanislogged) 

// let value =75
// let negValue=-value
// console.log(negValue)

// //ADD
// console.log(2+2)

// let str1="hello"
// let str2=" hitesh"
// let str3= str1+ str2
// console.log(str3);


// console.log(2+"1"); //12
// console.log("1+2");// 12
// console.log("1"+2);//12
// console.log("1"+2+2);//122
// console.log(1+2+"1");//31

// console.log(+true);//1
// console.log(+"");//0


// let gamecounter=100
// gamecounter++;
// console.log(gamecounter);


// console.log(null>0)//false
// console.log(null==0)//false
// console.log(null>=0)//true

// console.log(undefined ==0); //false

// console.log("2"===2) //strict check datatype and also equality compare



// primitive

// 7 types: string,number,boolean ,null,undefined,symbol,BigInt

// const score=100
// const scorevalue=100.3
// const islogged=falseconstoutsidetemp=null
// let useremail;
// const id= Symbol('123')
// const anotherId= Symbol('123')
// const bigNumber=35467890534565n

// //Non primitive
// // array,objects, functions

// const heros=["shaktiman","naagraj", "doga"];
// let myobj={
//     name:"niket",
//     age:22,
// }

// const myfunction= function(){
//     console.log("Hello world")   
// }
// console.log(typeof bigNumber);



//Stack (primitive)

//copy variable system follow means any change not change original value
let myyoutube="niket"
let anothername="saket "
anothername='nirupam'
console.log(myyoutube)
console.log(anothername)

//heap (non primitive)
//referece variable system follow any changes occur in , that also change original 

let userone={
    email:"niket@gmail.com",
    roll:"22bcs057"
}

let usertwo=userone

usertwo.roll="22bcs086"
console.log(userone.roll)
console.log(usertwo.roll)

