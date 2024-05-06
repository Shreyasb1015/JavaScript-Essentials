// for of

const arr=[1,2,3,4,5];

for (const num of arr) {
    console.log(num)
    
}

//We can also use for of loop to iterate over strings
const str="Hello World";

for (const char of str) {
    console.log(char)
    
}

//Maps
const map=new Map();
map.set("In","India");
map.set("Us","United States");
map.set("Fr","France");
map.set("In","India") //This will not be added as it is a duplicate key and map doesnt store dupalicated keys.

//Map is known for holding unique keys and values
console.log(map)

for(const [key,value] of map){

    console.log(key,':-',value)
}

const myObject={
    'game1':'Cricket',
    'game2':'Football',
    'game3':'Basketball'
}

/* 
for(const [key,value] of myObject){  //This will throw an error as myObject is not iterable

    console.log(key,':-',value)
} */

const myObject1={

    js:"Javascript",
    py:"Python",
    rb:"Ruby",
    cpp:"C++"
}

//To iterate ovee an oject we can use forin loop

for(const key in myObject1){
    console.log(key,':-',myObject1[key])
}

//Iterating over array using forin loop
const heros=["flash","superman","batman","wonderwoman"]
for(const hero in heros){
    console.log(heros[hero])
}

//for each loop

 const codingLanguages=["Javascript","Python","Ruby","Cpp"]
/* codingLanguages.forEach(function (val){

    console.log(val)
})  */

//foreach function requires a callback function to be passed as an argument

codingLanguages.forEach((item)=> {
    console.log(item)
});

codingLanguages.forEach((item,index,arr)=>{

    console.log(item,index,arr)
})

//Using foreach to iterate over an array of objects

const myCoding=[
    {
        language:"Javascript",
        type:"Frontend"
    },
    {
        language:"Python",
        type:"Backend"
    },
    {
        language:"Ruby",
        type:"Backend"
    },
    {
        language:"Cpp",
        type:"System"
    }
]

myCoding.forEach((item)=>{

    console.log(item.language,item.type)
})