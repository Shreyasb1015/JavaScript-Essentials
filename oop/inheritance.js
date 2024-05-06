class User{
    constructor(username){
        this.username = username;
       
    }
    logMe(){
        console.log(`USERNAME is ${this.username} and EMAIL is ${this.email} and PASSWORD is ${this.password}`)
    }
    
}

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email = email;
        this.password = password;
    }
   addCourse(){
    console.log(`A new course has been added by ${this.username}`)
   }
}

const teacher1 = new Teacher('john','john@gmail.com','abc');

teacher1.addCourse();
teacher1.logMe();

const user1 = new User('james');
user1.logMe();
//user1.addCourse(); //error coz addCourse is not a method of User class

console.log(teacher1 instanceof Teacher); //true
console.log(teacher1 instanceof User); //true