class user{
    constructor(name){
        this.name=name
    }

    static createId(){
        return `123`
    }
}

let newUser=new user('yogi')
console.log(newUser.createId())