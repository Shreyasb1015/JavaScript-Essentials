//ES6

class user{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}1234`;
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const user1 = new user('john','john@gmail.com','abc');
console.log(user1.encryptPassword());
console.log(user1.changeUsername());

//behind the scenes

function User(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}1234`;
}

User.prototype.changeUsername = function(){ 
    return `${this.username.toUpperCase()}`
}

const user2=new User('james','james@gmail.com','xyz');
console.log(user2.encryptPassword());
console.log(user2.changeUsername());
