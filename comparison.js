console.log(2 >2) //false
console.log(2 >=1) //true
console.log(2 <2) //false
console.log(2 <=2) //true
console.log(2 ==2) //true
console.log(2 !=2) //false


//JavaScript automatically converts the string to a number when doing the comparison.(but not recommended)
console.log("2" >1) //true
console.log("02" <1) //false

console.log(null >0) //false
console.log(null ==0) //false
console.log(null >=0) //true

// The above behavior is caused due to  the reason that equality check and comaprions operations work differently.


console.log(undefined >0) //false
console.log(undefined <0) //false
console.log(undefined ==0) //false

//strict equality check -- > === (checks for both value and datatype)

console.log(2 ===2) //true
console.log(2 ==="2") //false
