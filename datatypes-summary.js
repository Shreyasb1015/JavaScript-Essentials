
//primitve datatypes -->passed by value
// 1. Number
// 2. String
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt


const score=45
const score1=45.2

const isLoggedIn=true
const outsideTemp=null
let userEmail //undefined or  userEmail=undefined

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId) //false;

const bignNumber=BigInt(12345678901234567890)// or 12345678901234567890n
console.log(bignNumber)



//non-primitive datatypes --> passed by reference
// 1. Object
// 2. Array 
// 3. Function
// 4. Date
// 5. RegExp

const heros=['superman','batman','ironman']  //array
console.log(heros)

let myobject={name:'john',age:30} //object

const myfunction=function (){

    console.log('hello,Shreyas!')
}



///*********Memory in Javascript ***********/

// 1. Stack(stores the function calls,variables,primitives)
// 2. Heap(stores the objects,arrays,functions i.e non-primitive datatypes)

let name="Shreyas"

let name2=name
name2="John"

console.log(name) //Shreyas
console.log(name2) //John


let user={name:"Shreyas"}
let user2=user
user2.name="John"

console.log(user.name) //John
console.log(user2.name) //John

//The values which goes in heap are passed by refernce ,thats why the value of user.name is changed to John
//whereas the values which goes in stack are passed by value,thats why the value of name is not changed to John