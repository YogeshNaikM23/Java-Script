
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    
    return response.json()
    
}).then((data)=>{
    console.log(data)
})
.catch((e)=>{
    console.log(e)
})