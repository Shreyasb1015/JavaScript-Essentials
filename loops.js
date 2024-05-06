//for js

for(let i=0;i<5;i++){

    if(i==3){
        console.log("Three")
    }
    console.log(i)
}

for(let i=0;i<10;i++){
    console.log(`Outer loop value ${i}`)
    for(let j=0;j<5;j++){
        console.log(`Inner loop value ${j} and inner loop ${i}`)
    }


}

const myArray=["flash","superman","batman","wonderwoman"]

for(let i=0;i<myArray.length;i++){
    console.log(myArray[i])
}

//break and continue
 for(let i=1;i<=20;i++){
    if(i==5){
        console.log("Five detected")
        break;
    }
    console.log(`Value of i is ${i}`);
 }
 for(let i=1;i<=20;i++){
    if(i==5){
        console.log("Five detected")
        continue;
    }
    console.log(`Value of i is ${i}`);
 }

 //While and do while loops
let i=1

while(i<=10){
    console.log(`Value of i is ${i}`)
    i++;
}

let heros=["flash","superman","batman","wonderwoman"]
let arr=0
while(arr<heros.length){
    console.log(heros[arr])
    arr++;
}

i=1
do{
    console.log(`Value of i is ${i}`)
    i++;
}   while(i<=10)