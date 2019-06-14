const readForm = document.querySelector('form')
const input = document.querySelector('input')
const message1 = document.querySelector('#message1')
const message2 = document.querySelector('#message2')
readForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const search = input.value
    fetch('/read-n?title='+search).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                message1.textContent = data.error
                message2.textContent = ""
            }else{
                message1.textContent = "Title:"+data.title
                message2.textContent = "Body:"+data.body
            }
        })
    })
})