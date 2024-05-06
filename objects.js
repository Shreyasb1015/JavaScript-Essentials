
//object literals

const mySym=Symbol("key1")

const jsUser={
    name:"Shreyas",
    age:18,
    [mySym]:"key1",
    location:"Mumbai",
    email:"javascript@gmail.com",
    isLoggedIn:true,
    lastLoginDays:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
}

console.log(jsUser) //{ name: 'Shreyas' }
console.log(jsUser.name) //Shreyas
console.log(jsUser.age) //18
console.log(jsUser.location) //Mumbai

//Another way to access the object properties
console.log(jsUser["email"]) 
console.log(jsUser["name"])
console.log(jsUser[mySym]) //key1


//To change the value of the object
jsUser.name="Shreyas Bagwe"

//We can freeze the object so that no one can change the value of the object
//Object.freeze(jsUser)
//jsUser.name="Shreyas" //It will not change the value of the object
//console.log(jsUser.name) //Shreyas Bagwe

jsUser.greeting=function(){
    console.log("Hello")
}
console.log(jsUser.greeting()) ////Hello

jsUser.greeting2=function(){

    console.log(`Hello Js user,${this.name} is here`)

}

//Here this is used to refer to the  same object
console.log(jsUser.greeting2()) //Hello Js user,Shreyas Bagwe is here


const tinderUser= new Object()
tinderUser.id='123abc'
tinderUser.name='John'
tinderUser.isLoggedIn=false

const regularUser={

    email:'some@gmail.com',
    fullname:{
        userfullname:{
            firstname:'John',
            lastname:'Doe'
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)

const obj1={1:'a',2:'b'}
const obj2={3:'a',4:'b'}

const obj3={obj1,obj2}
console.log(obj3) //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object

const obj4=Object.assign({},obj1,obj2) //{} is passed as argument in assign func as per documentation
console.log(obj4) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }  

const obj5={...obj1,...obj2}
console.log(obj5) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' } 

const users=[
    {
        id:1,
        email:'h@gmail.com'
    }
]

console.log(users[0].email);
console.log(Object.keys(tinderUser)) //[ 'id', 'name', 'isLoggedIn' ]
//The above method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
console.log(Object.values(tinderUser)) //[ '123abc', 'John', false ]
console.log(Object.entries(tinderUser)) //[ [ 'id', '123abc' ], [ 'name', 'John' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('id')) //true

//destructuring of objects

const course={

    coursename:'Javascript',
    price:'100',
    courseInstructor:'Shreyas Bagwe'
}
//course.coursename

const{courseInstructor}=course
console.log(courseInstructor) //Shreyas Bagwe

//we can also shorten this name using : as shown below
const{courseInstructor:instructor}=course
console.log(instructor) //Shreyas Bagwe


