class User{
    constructor(name,pass){
        this.name=name
        this.pass=pass
    }

    logme(){
        console.log(`Your Logged In , Name: ${this.name}`)
    }
}

class Teacher extends User{
    constructor(name,pass,email){
        super(name,pass)
        this.email=email
    }

    getEmail(){
        return `Your Details is ${this.name} pass: ${this.pass} email:${this.email}`
         
    }
    
}

let newTeacher=new Teacher("yogi","123","hello@gmail.com")

console.log(newTeacher.getEmail())
console.log(newTeacher.logme())
