let user=function(userName){
    this.userName=userName;
    console.log("Inside the user function")
}

let setData=function(userName,email,pass){
    user.call(this,userName)
    this.email=email
    this.pass=pass
}

let newUser=new setData("Yogi","yogi@google.com","iDontKnow")
console.log(newUser)