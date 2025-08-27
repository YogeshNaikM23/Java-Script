function details(username,scroe){
    this.username=username;
    this.scroe=scroe;
}

details.prototype.increment=function(){
    this.score+=1
}

details.prototype.displaying=function(){
    console.log(this.scroe)
}

let user1=new details("yogi",23)
user1.increment()
user1.displaying()
