// const balance=1000
// if(balance>500) console.log("hello"),
// console.log("bye");  

// const month=3
// switch (month) {
//     case 1:
//         console.log("january")
//         break;
//     case 2:
//         console.log("February")
//         break;
//     case 3:
//         console.log("March")
//         break;
//     default:
//         console.log("Enter valid month in digit form ")
//         break;
// }


//falsy value
// false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy value
//"0","false", " ",[],{},function(){}

const emptyobj={}
if(Object.keys(emptyobj).length===0){
    console.log("object is empty");
}
 
// Terninary Operator
// condition ? true: false
const icetea=100
icetea<=80? console.log("less than 80"): console.log("morethan 80");