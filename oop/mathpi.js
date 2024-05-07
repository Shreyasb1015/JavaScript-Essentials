const descripter=Object.getOwnPropertyDescriptor(Math,'PI')
console.log(descripter)


const  test={

    name:'james',
    age:25,
    isAvailable:true,
    greet:function(){
        console.log(`Hello ${this.name}`)
    }
}
//Another way to create a object is Object.create() method

console.log(Object.getOwnPropertyDescriptor(test,'name'))

Object.defineProperty(test,'name',{
    writable:false,
    enumerable:false,

})

console.log(Object.getOwnPropertyDescriptor(test,'name'))

for (let [key,value] of Object.entries(test)) {
    if (typeof value !== 'function'){

        console.log(`${key} : ${value}`)
    }
        
}

 