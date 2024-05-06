
//const -->use to declare constant variables that cannot be changed

const accountId = 1234;

//let

let accountEmail="shreyas@gmail.com"

//var

var accountPassword="shreyas123";

accountCity="Mumbai"

//accountId=12345; //error
accountEmail="sb@gmail.com";
accountPassword="sb123";

accountCity="Pune";   // possible but not recommended

let accountState;

//Instead of printing all variables one by one , we can use console.table to print all variables in a table format.

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

//why we dont use var anymore? --> var is function scoped and let is block scoped.That is var has issue with block scope and let is better than var.
