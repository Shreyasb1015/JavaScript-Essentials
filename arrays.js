//array

const myArray=[0,1,2,3,4,5,true,"Shreyas"]
const myHeros=["Superman","Batman","Flash"]
console.log(myArray)
console.log(myHeros)

//javasrcipt arrays are dynamic in nature. We can add any type of data in the array.
//We can also add array inside an array.
//We can also add object inside an array.
//We can also add function inside an array.

console.log(myArray[0])//0

//Another way to create an array
const myArray2=new Array(1,2,3,4,5)
console.log(myArray2.length)  //5
console.log(myHeros.length)  //3

//Imp methods of array
myArray.push(7)
console.log(myArray) //[0,1,2,3,4,5,true,"Shreyas",7]

//To remove the last element from the array
myArray.pop()
console.log(myArray) //[0,1,2,3,4,5,true,"Shreyas"]

//To add the element at the beginning of the array
myArray.unshift(7)
console.log(myArray) //[7,0,1,2,3,4,5,true,"Shreyas"]

//To remove the element from the beginning of the array
myArray.shift()
console.log(myArray) //[0,1,2,3,4,5,true,"Shreyas"]

//To check if any element is present in the array
console.log(myArray.includes(2 )) //true
console.log(myArray.includes(7 )) //false

//Another way to do same thing
console.log(myArray.indexOf(2 )) //2
console.log(myArray.indexOf(7 )) //-1

const newArr=myArray.join()
console.log(newArr) //0,1,2,3,4,5,true,Shreyas -- >type is string
console.log(myArray) //[0,1,2,3,4,5,true,"Shreyas"] -->type is array

//slice and splice
console.log("A",myArray);
const myn1=myArray.slice(2,5)
console.log(myn1); //[2,3,4]
console.log("B",myArray); //[0,1,2,3,4,5,true,"Shreyas"] -->type is array

const myn2=myArray.splice(2,5)
console.log(myn2); //[2,3,4,5,true]
console.log("C",myArray); //[0,1,"Shreyas"] -->type is array

//Hence there are two differences between slice and splice
//1. slice does not change the original array but splice changes the original array
//2.slice doesnt include the range of index mentioned but splice includes the range of index mentioned

//We can reverse the array
console.log(myArray.reverse()) //["Shreyas",true,5,4,3,2,1,0]

//We can sort the array
console.log(myArray.sort()) //[0,1,2,3,4,5,"Shreyas",true]

const marvel_heros=["Ironman","Thor","Hulk"]    
const dc_heros=["Superman","Batman","flash"]

marvel_heros.push(dc_heros)
console.log(marvel_heros) //["Ironman","Thor","Hulk",["Superman","Batman","flash"]]
console.log(marvel_heros[3][2]) //flash

//We can also use concat method to add two arrays.It returns a new arrays
console.log(marvel_heros.concat(dc_heros)) //["Ironman","Thor","Hulk","Superman","Batman","flash"]

//We can also use spread operator to add two arrays

const all_heros=[...marvel_heros,...dc_heros]
console.log(all_heros); //["Ironman","Thor","Hulk","Superman","Batman","flash"]

const anotherArr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=anotherArr.flat(Infinity)
console.log(real_another_array) //[1,2,3,4,5,6,7,6,7,4,5]

console.log(Array.isArray("Shreyas")) //false
console.log(Array.isArray([1,2,3,4,5])) //true

//To make a array we can use Array.from method
console.log(Array.from("Shreyas")) //["S","h","r","e","y","a","s"]


let score1=100
let score2=200
let score3=300
consolelog(Array.of(score1,score2,score3)) //[100,200,300]