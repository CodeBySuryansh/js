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


//-------------------------stack and heap memory---------------------------
//primitive --stack
//non primitive --heap

let a=10;
let b=a; //here the copy is made if we change the a than there will be no chnage in the b



let obj1 = { name: "Alice" };
let obj2 = obj1;
obj1.name = "Bob";//here changes made in one variable reflected in both
console.log(obj2.name); // "Bob" – same reference
