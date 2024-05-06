function sayMyName(){
    console.log('S')
    console.log('h')
    console.log('r')
    console.log('e')
    console.log('y')
    console.log('a')
    console.log('s')

}

sayMyName() //S h r e y a s

function addTwoNumbers(a, b){
    console.log(a + b)
}

const result=addTwoNumbers(10, 20) //30
console.log(result) //undefined,coz func does not return anything

function getNumber(num){

    return num;
}

const no=getNumber(10);
console.log(no) //10

function loginUserMessage(username){

    return `${username} has logged in`

}

const msg=loginUserMessage('shreyas') //shreyas has logged in
console.log(msg)
//if value is not passed to the function, it will return undefined just like the previous example


function loginUserMessage1(username){

    if(!username) {
        console.log('Please provide a valid username')
        return
    }

    return `${username} has logged in`

}

console.log(loginUserMessage1()) //Please provide a valid username

//When we dont know the actual numbers of parameters that gonna come in func or if we want to make many parameters ,then we use rest parameter
//Rest parameter
function calculateCartPrice(...num1)
{
    return num1
}

console.log(calculateCartPrice(200,300,400))

const user={

    name:'Shreyas',
    price:100
}

function handleObject(anyobject)
{
    console.log(`The name of the user is ${anyobject.name} and the price is ${anyobject.price}`)
}

handleObject(user) //The name of the user is Shreyas and the price is 100

const myarray=[1,2,3,4,5,6,7,8,9,10]

function returnSecondElement(array)
{
    return array[1]
}

console.log(returnSecondElement(myarray)) //2

