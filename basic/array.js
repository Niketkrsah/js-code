// const myArr=[0,1,2,3,4,5]
// // console.log(myArr[0])  

// // //array in js make shallow copy(same reference point)

// // //deep copy( make copy)

// // myArr.push(6)// ADD
// // myArr.push(7)
// // myArr.pop()//remove last value
// // // myArr.unshift(9)// Add in first value is 9
// // myArr.shift()//first place is removed
// // console.log(myArr.includes(5))
// // console.log(myArr.indexOf(3))

// // const newArr=myArr.join() // join+ change in string
// // console.log(newArr);


// //SLICE (last not include in range),SPLICE(last inclue in range and also remove from original array)
// // splice generally remove slice from original array
//  const myn1=myArr.slice(1,3)
//  console.log(myn1);
//  console.log(myArr)
//  const myn2=myArr.splice(1,3)
//  console.log(myn2)
//  console.log(myArr)


//  const marvell=["batman","spiderman"]
//  const indian=["superman","megastar"]
// // //  const heros=marvell.push(indian)

// // //  console.log(heros)/// array add new array 
// //  const allheros=marvell.concat(indian)
// //  console.log(allheros)// adding to array
// // //  console.log(marvell.)

// const allhero=[...marvell,...indian] /// sperate adding method
// console.log(allhero) 


// const another_array=[1,1,23,3,34,3,[12,3,3],[323,3,[2,2]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name: "Hitesh"}))/

//  let score1=100
//  let score2=200
//  let score3=300
//  console.log(Array.of(score1,score2,score3))