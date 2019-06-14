const listForm = document.querySelector('#list_form')
const l1 = document.querySelector('#l1')
listForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    fetch('/list-n').then((res)=>{
        res.json().then((data)=>{
            console.log(data)
            l1.textContent = "" 
            for(i=0;i<data.length;i++){
                l1.textContent += " "+(i+1)+".  Title: "+data[i].title+" Body: "+data[i].body
            }
        })
    })
})