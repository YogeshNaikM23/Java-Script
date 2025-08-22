// // const tinderUser=new Object({name:"Yogesh",gender:21})

// // console.log(tinderUser);

let newObjects={}

newObjects.name="Sam Altman"
newObjects.age=21
newObjects.gender="Male"
newObjects.datesAvai=[10,4,32,6]



// let otherUser={
//     name:"Yogesh",
//     age:98,
//     gender:"Male"
// }

// newObjects.users=otherUser


// console.log(newObjects)

let one={1:"a",2:"b"}
let two={3:"c",4:"d"}

//let three={one,two} // this wont work
// let three=Object.assign(one,two)
//we can also ues this this method to spilt the object or the array
// let three={...one,...two}
// console.log(three);


// console.log(newObjects);

// console.log(Object.keys(newObjects))
// console.log(Object.values(newObjects))
// console.log(Object.entries(newObjects))


//destrucing the object

let course={
    name: "JavaScript",
    price:"free",
    instructor:"Yogesh"
}

// const {instructor}=course

// console.log(instructor)

const {instructor:ins}=course
console.log(ins)

//when we use the api they gave data in JSON file
//synatx of JSON

// {
//     "name":"Yogesh",
//     "courseName":"JAVASCRIPT",
//     "price":"Completely free"
// }

