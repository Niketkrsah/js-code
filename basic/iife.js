// // immediately invoked function expressions(IIFE)

// //iife use for remove globall scope pollution 
// //()<-for function then  -> () for execution of function


(function chai(){ // named IIFE
    console.log(`db connected`);
    
}) 
();   // semicolon use for end acode other wise give error for next function execution

// (()=>{
//     console.log(`db 2 connected`)

// }) ();

// ((name)=>{
//     console.log(`db 2 connected ${name}`)

//2nd way

// }) ("niket");
// ((name)=>{
//     console.log(`db 2 connected ${name}`)

// }) ("niket");

//3rd way

// ((name)=> console.log((`db 2 connected ${name}`))) 
// ("saket");


