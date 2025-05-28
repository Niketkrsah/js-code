

// let myDate=new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

// let myCreatedDate=new Date("2025-1-23")
// // console.log(myCreatedDate.toDateString())
// let myTimeStamp= Date.now()
// console.log(myTimeStamp);  //MIlli second
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000));   // Second
   

let newdate= new Date()
console.log(newdate.toLocaleDateString())
console.log(newdate.getMonth()+1)


console.log(newdate.toLocaleString('default',{
    weekday:"long"
}))