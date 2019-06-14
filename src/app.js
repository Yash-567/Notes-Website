const notes = require('./utils/notes.js')
const path = require('path')
const express = require('express')
const app = express()
const hbs = require('hbs')
app.use(express.static(path.join(__dirname,'../public')))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname,'../templates/views'))
hbs.registerPartials(path.join(__dirname,'../templates/partials'))
app.get('',(req,res)=>{
    res.render('index',{
        title: 'Notes App',
        name: 'Yash Sonar'
    })
})
app.get('/about',(req,res)=>{
    res.render('about', {
        title: 'About Page',
        name: 'Yash Sonar'
    })
})
app.get('/add',(req,res)=>{
    res.render('add', {
        title: 'Add Note',
        name: 'Yash Sonar'
    })
})
app.get('/add-n',(req,res)=>{
    const add_title = req.query.title
    const add_body = req.query.body
    notes.addNote(add_title,add_body,(response)=>{
        res.send({
            response
        })
    })
})

app.get('/remove',(req,res)=>{
    res.render('remove', {
        title: 'Remove Note',
        name: 'Yash Sonar'
    })
})
app.get('/remove-n',(req,res)=>{
    const remove_title = req.query.title
    notes.removeNote(remove_title,(response)=>{
        res.send({
            response
        })
    })
})
app.get('/read',(req,res)=>{
    res.render('read', {
        title: 'Read Note',
        name: 'Yash Sonar'
    })
})
app.get('/read-n',(req,res)=>{
    const read_t = req.query.title
    notes.readNote(read_t,(response)=>{
        if(response==='No Note Found'){
            res.send({
                error: response
            })
        }else{
            res.send({
                title: read_t,
                body: response
            })
        }
    })
})
app.get('/list',(req,res)=>{
    res.render('list', {
        title: 'List Note',
        name: 'Yash Sonar'
    })
})
app.get('/list-n',(req,res)=>{
    notes.listNotes((note_titles)=>{
        res.send(note_titles)
    })
})
app.listen(3000,()=>{
    console.log('Server is up and running on port 3000')
})