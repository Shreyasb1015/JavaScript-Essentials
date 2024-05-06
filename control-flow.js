//if

if(true){
    console.log("This is true");
}

if(2===3){
    console.log("This is false");
}
const isUserLoggedIn=true
if(isUserLoggedIn){
    console.log("Show the user dashboard");
}

//differnce between == and ===

if(2=='2'){
    console.log("This is true");
}

if(2==='2'){
    console.log("This is false");
}

//===also checks the type of the variable,whereas == only checks the value of the variable.


//if-else

if(2===3){
    console.log("This is true");
}
else{
    console.log("This is false");
}

//else if
const balance=800

if(balance <500)
{
    console.log("less than 500")
}
else if(balance <750){
    console.log("less than 750")
}
else{
    console.log("greater than 750")
}

const debitCard=true
const isEmployed=false

if(debitCard&& balance>500){
    console.log("You can make the purchase")
}else{
    console.log("You cannot make the purchase")
}

if(debitCard || isEmployed){
    console.log("You can make the purchase")
}
else{
    console.log("You cannot make the purchase")
}


//switch case
const month=3

switch(month){
    case 1:
        console.log("January")
        break
    case 2:
        console.log("February")
        break
    case 3:
        console.log("March")
        break
    default:
        console.log("Invalid month")
}

//truthy value
const name="Shreyas"

if(name){
    console.log("Name is present")
}
else{
    console.log("Name is not present")
}

//falsy value --> false,0,-0,BigInt 0n,NaN,null,undefined,"",document.all

const nullvalue=null;
if(nullvalue){
    console.log("nullvalue is present")

}
else{
    console.log("nullvalue is not present")
}

const emptyObject={}

if(Object.keys(emptyObject).length===0){
    console.log("emptyObject is present")
}else{
    console.log("emptyObject is not present")
}

//Nullish coalescing operator (??):null undefined

let val1;

//val1=5 ??10
val1=null ??10
val2=undefined ??10
console.log(val1)
console.log(val2)

//Ternary operator

//condition ? true:false
const price=100

price >=80?console.log("You can purchase the item"):console.log("You cannot purchase the item")