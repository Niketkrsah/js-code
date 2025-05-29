// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
// }


//  let myarray=["flash","batman","superman"]
//  let arr=0
//  while(arr < myarray.length){
//     console.log(`value is ${myarray[arr]}`);
//     arr+=1
//  }

// let score=1  
// do{
//  console.log(`scoreis ${score}`);
//  score++
// } while(score<=10);

////for of loop
//["","",""] // string in array
//[{},{},{}]// objecty in array



// const arr=[1,2,3,4,5]
// for (const num of arr){
//     console.log(num);
// }

// const greeting="Hello world1"
// for(const greet of greeting){ // take any name instance of num, greet etc
//     console.log(`each char is ${greet}`)
// }

//  const map =new Map()
//  map.set("IN","India")
//  map.set("usa","united state of america")
//  console.log(map);
// //  for(const key of map){// give array of each
// //     console.log(key);
// //  }


//  for(const [key,value] of map){
//    console.log(key,":-",value);
//  }

// const myobject={
//     game1:"NFS",
//     game2:"spiderman",
//     js: "javascript"
// }
//  for (const key in myobject) {
//         console.log(`${key} shortcut is for ${myobject[key]}`);
// }


// const programming=["js","python","java"]
// for (const key in programming) {
//     console.log(programming[key]);
// }
 
// const coding=["js","python","java"]

// /// 1st way
// // coding.forEach(function(iteam){
// //     console.log(iteam)
// // })


// //// 2nd way
// // function print(iteam){
// //     console.log(iteam);
// // }
// // coding.forEach(print)

// //3rd way
// coding.forEach((iteam,indexedDB,arr) =>{
//     console.log(iteam,indexedDB,arr);
// })

const mycoding=[{
    languageName:"javascript",
    languagefilename:"js"
},
{
    languageName:"python",
    languagefilename:"py"
},
{
    languageName:"c programing",
    languagefilename:"c"
}
]
mycoding.forEach((iteam) => {
    console.log(iteam.languageName)
})