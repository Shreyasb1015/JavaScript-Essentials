//Immediately Invoked Function Expressions (IIFE)

(function hello() {
  console.log('Hello')
})();

//Semicolon after the iife are imp coz it marks the end of func.If we wont put semicolon , it gives error while implementing other iifes.


( ()=> {

    console.log('I am Shreyas!')
} )();

( (name)=> {
    console.log(`I am ${name}`)
})('John');