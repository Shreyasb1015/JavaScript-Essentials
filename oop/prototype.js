let myName="Shreyas"

console.log(myName.length); // 7


let myHeros=["Ironman","Thor","Hulk","spiderman"]

let heroPower={
    thor:"hammer",
    ironman:"suit",
    hulk:"strength",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }

}


Object.prototype.shreyas=function(){
    console.log("Shreyas");
}

heroPower.shreyas(); // Shreyas

myHeros.shreyas(); // Shreyas

Array.prototype.heyshreyas=function(){  // Adding a new method to Array prototype
    console.log("hey shreyas");
}

myHeros.heyshreyas(); // hey shreyas
//heroPower.heyshreyas(); //  will give error


//inheritance
const User={
    name:'Shreyas',
    email:'shreyas@gmail.com'

}

const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'Js Assignment',
    fulltime:true,
    __proto__:TeachingSupport  // Inheriting TeachingSupport
}

Teacher.__proto__=TASupport; // Inheriting TASupport

Teacher.__proto__=User; // Inheriting User


//New way of inheritance

Object.setPrototypeOf(Teacher,TASupport); // Inheriting TASupport


let anotherUserName="James    "

String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUserName.trueLength(); // True length is 5