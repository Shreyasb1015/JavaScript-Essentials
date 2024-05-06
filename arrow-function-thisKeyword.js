const user={

    username:"Shreyas",
    price:999,

    welcomeMessage:function(){
        console.log( `Welcome ${this.username}!`);
        console.log(this); //Output: {username: "Shreyas", price: 999, welcomeMessage: ƒ}

    }
}

//This keyword is used to access the object properties inside the object or to refer to the object itself.

user.welcomeMessage(); //Output: "Welcome Shreyas!"
user.username="Shreyas Bagwe"
user.welcomeMessage(); //Output: "Welcome Shreyas Bagwe!"

//Arrow function

const add=(num1,num2) =>{

    return num1+num2
}

console.log(add(2,3)); //Output: 5

//Arrow function with only implicit return

const multiply=(num1,num2) => num1*num2;

console.log(multiply(2,3)); //Output: 6 

const getObject=() => ({name:"Shreyas",age:22});

console.log(getObject()); //Output: {name: "Shreyas", age: 22}

