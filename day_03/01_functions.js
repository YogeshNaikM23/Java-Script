// function sayMyName(){
//     console.log("y")
//     console.log("o")
//     console.log("g")
//     console.log("i")

// }

// sayMyName()
// sayMyName()

// function addition(a,b){
//     if(typeof(a)==="number" && typeof(b)==="number"){
//         console.log(a+b)
//     }
//     else{
//         console.log("Enter The Valid Number")
//     }
// }

// addition(8,8)

// function sumOfAllNumber(val1,...num){
//     let ans=null;
//     for (let i=0;i<num.length;i++){
//         ans+=num[i]
//     }
//     return ans
// }

// console.log(sumOfAllNumber(10,20,30))

let simpleVariable={
    name:"Yogesh",
    age:23
}

function printing(anyObject){
    console.log(`hi ${anyObject.name} and you are ${anyObject.age} years old`)
}

printing(simpleVariable)