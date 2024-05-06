function SetUserName(username){
    //complex DB calls
    this.username = username;
}

function createUser(username,email,password){
    SetUserName.call(this,username); //call is used when we want to call a function with a specific context 
    this.email = email;
    this.password = password;
    
}

const user= new createUser('John','john123@gmail.com','john123');
console.log(user);