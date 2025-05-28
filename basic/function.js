//   function login(username){
//     if(!username){ /// !username means username = undefined
//         console.log("please enter username")
//         return // for not excecuted down return
//     }
//     return`${username} just logged in`
//   }
//   //call function
//   console.log(login("Niket"))
//   console.log(login())



//     function login(username="Default ghost"){
//     if(!username){ /// !username means username = undefined
//         console.log("please enter username")
//         return // for not excecuted down return
//     }
//     return`${username} just logged in`
//   }
//   //call function
//   console.log(login("Niket"))
//   console.log(login())


// //restoperator using 
// function calculatecart(...num1){
//     return num1
// }

// console.log(calculatecart(200,400,500))

// function calculatecart1(val1,val2,...num1){// val1=200,val2=400
//     return num1
// }

// console.log(calculatecart1(200,400,500,2000))


// const user={
//     username:"niket",
//     price:139
// }

// function handleproject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
//     return
// }
// handleproject(user)
// // 2nd method to pass 
//  handleproject({
//      username:"sam",
//     price:100
//  })

const mynewarray=[100,200,400,800]
function myarray2(getvalue){
    return getvalue[1]
}
console.log(myarray2(mynewarray))