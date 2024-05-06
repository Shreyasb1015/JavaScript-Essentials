const score=400

//We can explicitly define a numbers using the Number() function

const score1= new Number(500)
console.log(score1)

console.log(score1.toString().length) //converts the number to string
console.log(typeof score1.toString()) //converts the number to string
console.log(score1.toFixed(2)) //converts the number to string and rounds it to 2 decimal places

const number2=25.997

console.log(number2.toPrecision(3)) //converts the number to string and rounds it to 3 decimal places i.w 26.0
console.log(number2.toPrecision(2))//converts the number to string and rounds it to 2 decimal places i.e 26

const hundreds=1000000

console.log(hundreds.toLocaleString('en-IN')) //converts the number to string and adds commas to the number;

console.log(Number.MAX_VALUE) //returns the maximum value of a number
console.log(Number.MIN_VALUE) //returns the minimum value of a number


// *********Maths**********

console.log(Math) 

console.log(Math.PI) //returns the value of PI

console.log(Math.abs(-5)) //returns the absolute value of a number
console.log(Math.round(4.6));
console.log(Math.ceil(4.3)); //returns the smallest integer greater than or equal to a given number
console.log(Math.floor(4.9)); //returns the largest integer less than or equal to a given number

console.log(Math.max(3,4,5,6,7,8,9,10)) //returns the largest number in a given list
console.log(Math.min(3,4,5,6,7,8,9,10)) //returns the smallest number in a given list
console.log(Math.pow(2,3)) //returns the value of 2 raised to the power of 3

//Important function

console.log(Math.random()) //returns a random number between 0 and 1 

//We can modify it so that we can fetch  a random number between 1 and 10
console.log(Math.floor(Math.random()*10)+1) //returns a random number between 1 and 10


//Better way to do it
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min) //returns a random number between 10 and 20