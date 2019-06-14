const removeForm = document.querySelector('#remove_form')
const input3 = document.querySelector('#remove_t')
const remove_message = document.querySelector('#remove_message')
removeForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const remove_t = input3.value
    if(!remove_t){
        remove_message.textContent = 'You must provide a title'
    }else{
        fetch('/remove-n?title='+remove_t).then((res)=>{
            res.json().then((data)=>{
                remove_message.textContent = data.response
            })
        })
    }
})
