const form=document.querySelector('form')
form.addEventListener('submit',(e)=>{
  e.preventDefault()
  // console.log(e)
  let heigh=parseInt(document.querySelector('#height').value)
  let weight=parseInt(document.querySelector('#weight').value)
  let result=document.querySelector('#results')

  if(heigh==='' || heigh<10 || isNaN(heigh)){
    if(weight==='' || weight<5 || isNaN(weight)){
      result.innerHTML="Please provide a valid height and weight"
    }}

  if(heigh==='' || heigh<10 || isNaN(heigh)){
    result.innerHTML="Please provide a valid height"
  }
  else if(weight==='' || weight<5 || isNaN(weight)){
    result.innerHTML="Please provide a valid weight"
  }
  else{
    let final=weight/((heigh*heigh)/10000).toFixed(2)
    result.innerHTML=`${final}`
    alert(final)
  }
 
  
  
  
  
})