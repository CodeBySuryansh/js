//primitive 
//7 types=number,string,boolean,undefined,BigInt,symbol

// const id =Symbol("123")
// const AnotherId=Symbol("123")
// console.log(id===AnotherId);

//If you want symbols to be shared globally (same reference if same key), use Symbol.for() instead:
const id =Symbol.for("123")
const AnotherId=Symbol.for("123")
console.log(id===AnotherId);
//Symbol.for("123") checks if a symbol with that key exists in the global symbol registry. 
//If it does, it reuses it; otherwise, it creates and registers a new one.



//Reference(Non Primitive)

//Array,object,Function

const heroes = ["shaktiman","naagraj","doga"]
let myObj={
    name:"hitesh",
    age:22,
}

//storing function into variables
const myFunction=function(){
    console.log("hello world");
    
}
