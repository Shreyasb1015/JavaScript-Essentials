class User{

    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    get password(){

        return this._password.toUpperCase();
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email=value.toUpperCase();
    }
    set password(value){
        this._password=value.toUpperCase();
    
    }
}

const user1=new User('user1@gmail.com','abc');
console.log(user1.password); //Output: 1234
console.log(user1.email); 

//_password is used to avoid the conflict between the property and the getter and setter.
//When we access user1.password, the getter is called and the value of the password is returned in uppercase.It takes the value of the password and converts it to uppercase.
// _ notation is imp to avoid the stack overflow error.

//Getter and Setter are used to get and set the values of an object property.
//They are useful when we want to perform some operation on the object property before getting or setting the value.
//Getter and setter ,both should be defined ..so that we can use them.
