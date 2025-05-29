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

// const mycoding=[{
//     languageName:"javascript",
//     languagefilename:"js"
// },
// {
//     languageName:"python",
//     languagefilename:"py"
// },
// {
//     languageName:"c programing",
//     languagefilename:"c"
// }
// ]
// mycoding.forEach((iteam) => {
//     console.log(iteam.languageName)
// })

// const myNums=[1,2,3,4,5,6,7,8,9]
// // const newNums=myNums.filter((num)=> num>4)
// // console.log(newNums)

// const newNums=myNums.filter((num)=> {
//     return num>4}
// )
// console.log(newNums)




// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

// //   const userbooks=books.filter((bk)=>{
// //     return bk.genre==='History'})
// //   console.log(userbooks);
//    const userbooks2=books.filter((bk)=>{
//     return bk.publish>1995 && bk.genre==='History'})
//   console.log(userbooks2);





// const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newmuns= myNums.map((num) => num +10)
// console.log(newmuns);

//  myNums.forEach((num) => {
//     console.log(num+10);
// }) 

// const newnums= myNums
//                 .map((num) => num * 10)
//                 .map((num)=> num + 1)
//                 .filter((num)=>num>=40)
// console.log(newnums);

// const mynums=[1,2,3]
// ///1st way
// // const mytotal=mynums.reduce((acc,currval)=>{
// // console.log(`acc: ${acc} and currval:${currval}`);
// // return acc+currval
// // },0)

// ///2nd way

// // const mytotal=mynums.reduce((acc,curr)=>acc+curr,0)
// // console.log(mytotal)

// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 999
//     },
//     {
//         itemName: "mobile dev course",
//         price: 5999
//     },
//     {
//         itemName: "data science course",
//         price: 12999
//     }
// ]
// const total=shoppingCart.reduce((acc,iteam)=> acc +iteam.price,0)
// console.log(total)

