let buttons=document.querySelectorAll(".button")
let body=document.querySelector("body")
console.log(buttons)

buttons.forEach((value)=>{
    value.addEventListener('click',()=>{
        console.log(value.id)
    
        if(value.id==="grey"){
            body.style.backgroundColor=value.id
        }
        if(value.id==="white"){
            body.style.backgroundColor=value.id
        }
         if(value.id==="blue"){
            body.style.backgroundColor=value.id
        }
         if(value.id==="yellow"){
            body.style.backgroundColor=value.id
        }
    
    })
})