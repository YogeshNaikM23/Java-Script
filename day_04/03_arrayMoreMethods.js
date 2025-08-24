const newArra=[1,2,3,4,5,6,7,8,9,10];
let initialValue=0
const newValue=newArra.reduce((acc,current)=> {
    return acc+current
},initialValue
)

console.log(newValue)