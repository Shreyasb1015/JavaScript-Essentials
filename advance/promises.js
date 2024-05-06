const promiseOne= new Promise(function(resolve,reject){

    //Do an async task async task and then...
    //Db calls,crypto,http requests,network call

    setTimeout(function(){
        console.log('Async task is completed');
        resolve(); //connecting with then
    },1000);
}) 

//Consuming the promise
//remember that resolve has connection with then
promiseOne.then(function(){
    console.log('Promise consumed successfully');
})

//Another way

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is completed'); 
        resolve(); //connecting with then
    },1000);
}).then(function(){
    console.log('Promise 2 consumed successfully');
})

const promiseThree= new Promise(function(resolve,reject){

    setTimeout(function(){
        resolve({name:'John',age:30}) //connecting with then and passing data
    },1000);
})

promiseThree.then(function(data){
    console.log(data);
})

const promiseFour= new Promise(function(resolve,reject){

    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({name:'Bob',age:20}) //connecting with then and passing data;
        }
        else{
            reject('ERROR:Something went wrong'); //reject is used to handle error
        }

    },1000);
})
//catch is used to handle error and connect the reject part of code


//Chaining promises and use of catch,finally
//Chaining refers that the value which the first promise returns is passed to the next promise
promiseFour
.then((user)=>{

    console.log(user);
    return user.name
})
.then((name)=>{

    console.log(name);
})
.catch((error)=>{

    console.log(error)
})
.finally(()=>{
    console.log('Promise either resolved or rejected');  //This block will always be executed
})

const promiseFive= new Promise(function(resolve,reject){

    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({name:'javascript',age:24}) //connecting with then and passing data;
        }
        else{
            reject('ERROR:Js went wrong'); //reject is used to handle error
        }

    },1000);
})

//Handling the promise using async and await 
//Async and await is used to handle the promise in a synchronous way

//async function consumePromiseFive(){
   // const response=await promiseFive;
  //  console.log(response);
//}

//consumePromiseFive();

//This async and await cannot handle the error part of the promise
//To handle the error part we use try and catch block
async function consumePromiseFive(){
    try{
        const response=await promiseFive;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

// async function getAllUsers(){

//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data=await response.json(); //converting the response to json and as it takes time we use awaits
//         console.log(data);
//     }
//     catch(error){
//         console.log(error);
//     }
// }


//getAllUsers();

//Fetch method is used to make http requests and it returns a promise
//A fetch promise doesnt reject for http error status like 404,500 etc.Instead a then() block is executed and check the ok property of the response object(repsonse.ok/response.status)
//When we use fetch,a special queue is created called fetch queue and the fetch request is sent to the server and the response is sent to the fetch queue

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{

    return response.json();
})
.then((data)=>{

    console.log(data);
})
.catch((error)=>{   
    console.log(error);
})