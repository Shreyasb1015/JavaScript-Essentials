class User{
    constructor(username){
        this.username = username;
       
    }
    logMe(){
        console.log(`USERNAME is ${this.username} and EMAIL is ${this.email} and PASSWORD is ${this.password}`)
    }
    static createId(){
 
        return `123`;
    }
}

const user1 = new User('james');
//console.log(user1.createId());    //error coz createId is a static method
//static methods are called on the class itself and not on the instance of the class

class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email = email;
        
    }
   
}

const teacher1 = new Teacher('john','john@gmail.com');
console.log(teacher1.logMe());