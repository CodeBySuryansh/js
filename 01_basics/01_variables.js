const accountId = 1444553 //const - once value is assigned cannot be changed 
let accountEmail = "ss675@gmail.com" // block scoped also it is ones declared and cannot be declared again
var accountPassword = "12345" //function scoped redeclaration allowed
accountCity = "jaipur"

//accountId=2 //not allowed
accountEmail="ss542455@gmail.com"
accountPassword="654789"
accountCity="bengaluru"
console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity])