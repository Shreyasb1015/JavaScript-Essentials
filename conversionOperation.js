
let score=33

console.log(typeof score) //number
//or
console.log(typeof(score)) //number

score="33"
console.log(typeof score) //string

let valueInNumber =Number(score)  //convert string to number
console.log(typeof valueInNumber) //number

// if score="33abc" then valueInNumber=NaN and it will show datatype as number,which can be misleading

//if score=null then valueInNumber=0 and it will show datatype as number

//if score=undefined then valueInNumber=NaN and it will show datatype as number

//if score=true then valueInNumber=1 and it will show datatype as number

//Nan means not a number

let isLoggedIn=1
let booleanValue=Boolean(isLoggedIn) //convert number to boolean
console.log(booleanValue) //true

//if isLoggedIn=0  or  " " ,then booleanValue=false
//if isLoggedIn= "abc" or "true" ,then booleanValue=true

let number=45

let stringValue=String(number) //convert number to string
console.log( stringValue) //45
console.log(typeof stringValue) //string    


//*****operations******

let value=3

let negvalue=-value
console.log(negvalue) //-3

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2); //remainder
console.log(2**3);//exponential

let str1="Hello"
let str2=" Shreyas"

let str3=str1+str2

console.log(str3) //Hello Shreyas

console.log("1" + 2) //12
console.log(1 + "2") //12


//special cases
console.log("1"+2+2) //122


//ambiguous case
console.log(1+2+"2") //32

console.log(+true) //1
//console.log(true+) --> not possible


let num1,num2,num3

num1=num2=num3=4
console.table({num1,num2,num3})


//infix and postfix incremenets

let x=5
let y = x++

console.log(x) //6
console.log(y) //5


let a=5
let b= ++a

console.log(a) //6
console.log(b) //6