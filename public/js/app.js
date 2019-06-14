console.log('Client side javascript is loaded')
const addForm = document.querySelector('#add_form')
const input1 = document.querySelector('#add_t')
const input2 = document.querySelector('#add_b')
const add_message = document.querySelector('#add_message')
addForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    const add_title = input1.value
    const add_body = input2.value
    if(!add_title){
        add_message.textContent = 'You must Provide a title'
    }else{
        fetch('/add-n?title='+add_title+'&body='+add_body).then((res)=>{
            res.json().then((data)=>{
                add_message.textContent = data.response
            })
        })
    }
})
yargs.command({
    command: 'remove',
    describe: 'remove a command',
    builder:{
        title:{
            desc: ' Remove a Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler() {
        notes.removeNote(yargs.argv.title)
    }
})
yargs.command({
    command: 'list',
    describe: 'list a command',
    handler() {
        notes.listNotes()
    }
})
yargs.command({
    command: 'read',
    describe: 'read a command',
    builder:{
        title:{
            desc:'note title',
            type:'string',
            demandOption:true
        }
    },
    handler() {
        notes.readNote(yargs.argv.title)
    }
})
yargs.parse()