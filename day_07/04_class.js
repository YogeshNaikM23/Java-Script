class User{

    constructor(name,pass){
        this.name=name
        this.pass=pass
    }

   getUsername(){
    return `The username is : ${this.name}`
   }

   getPassword(){
    return `The Password is : ${this.pass}`
   }

   setUSername(name){
    this.name=name
   }
}

let newUser=new User("yogi","123")
console.log(newUser.getUsername())
console.log(newUser.getPassword())

newUser.setUSername("sam")
console.log(newUser.getUsername())

