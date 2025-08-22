// let newObjects={}

// console.log(typeof newObjects)\
let mySym=Symbol("key")
let newObjects={
    name:"yogesh",
    age:24,
    [mySym]:"newKey",
    "gender":"Male",
    email:"yuvaka@moteo.com",
    isLoginedIn:false,
    loginDays:["Monday","Tuesday","Wednesday"]
}

// console.log(newObjects);
// console.log(newObjects.loginDays);
// console.log(typeof newObjects[mySym]);

// newObjects.gender="mAlE"


// Object.freeze(newObjects)
// newObjects.isLoginedIn=true
// console.log(newObjects)

newObjects.geeting=function(){
    return (`Hello this is ${this.name}`)
}

console.log(newObjects.geeting())


