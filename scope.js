let a=1
if(true){
    let  a=10
    //const b=20 
    var c=30
    console.log("inside",a) //10
    
}

console.log(a) //1
//console.log(b)
console.log(c)

function one(){

    const username='shreyas'

    function two(){
        const website='youtube.com'
        console.log(username) //shreyas
    }
    console.log(website) //error
    two()
}

one()

if(true){

    const username='shreyas'
    if(username==='shreyas'){
        const website='youtube.com'
        console.log(username+website) //shreyas
    }
    console.log(website) //error
}
console.log(username) //error


//If we call addTwo(5),it will give error coz of hoisting

//addTwo(5) -->error
const addTwo=function(num){

    return num+2;
}