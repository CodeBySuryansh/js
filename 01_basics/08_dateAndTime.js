let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())
// console.log(typeof myDate)

let myCreatedDate=new Date(2023,1,23)
console.log(myCreatedDate.toLocaleString())
let myNewCreatedDate=new Date("23-04-2024")
console.log(myNewCreatedDate.toLocaleString())

let myTimeStamp=Date.now(); //gives time stamp in mili secons since the date created
console.log(myTimeStamp)
console.log(myCreatedDate.getTime());//give time in millisecond till myCreated Date
console.log(Math.floor(Date.now()/1000))//gives time stamp in seconds

let newDate=new Date();
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())
