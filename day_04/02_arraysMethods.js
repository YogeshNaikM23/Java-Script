// let lang=["cpp","c","JavaScript","php","swift","go","r","ruby"]

// const ans=lang.forEach((item)=>{
//     console.log(item)
//     return item
// })

// console.log(ans)

// const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.filter((num)=>{
//     return num%2==0
// })

// console.log(newNums)

// let newNums=[]

// myNums.forEach((num)=>{
//     if(num%2==0){
//         newNums.push(num)
//     }
// })

// console.log(newNums)

// const books=[
//     {bookName:"bookOne",genre:"horror",published:1987},
//     {bookName:"bookTwo",genre:"thriller",published:1997},
//     {bookName:"bookThree",genre:"mystry",published:1987},
//     {bookName:"bookFour",genre:"thriller",published:1888},
//     {bookName:"bookFive",genre:"horror",published:1986},
//     {bookName:"bookSix",genre:"crime",published:1977},
// ]

// const requestedBook=books.filter((value)=>{
//     return value.published > 1986 &&  value.genre==="thriller"
// })

// console.log(requestedBook)

const myNums=[1,2,3,4,5,6,7,8,9,10]

const newNums=myNums.map((value)=>value*2).map((key)=>key+1).filter((value)=>value>10)

console.log(newNums);
