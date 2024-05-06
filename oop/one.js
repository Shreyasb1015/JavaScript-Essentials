const user={
    username:'shreyas',
    logincount:8, 
    signedIn:true,
    getuserDetails:function(){
        //console.log("Got user details")
        //this refers to the object that is calling the function
        console.log(`Username is ${this.username} and login count is ${this.logincount}`)
    }
}
console.log(user.username)
console.log(user.getuserDetails())

//constructor

function User(username,logincount,signedIn){
    this.username=username
    this.logincount=logincount
    this.signedIn=signedIn
    this.getuserDetails=function(){
        console.log(`Username is ${this.username} and login count is ${this.logincount}`)
    }
    return this;
}

const userOne=User('shreyas',8,true)
console.log(userOne)