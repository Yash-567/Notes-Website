const fs = require('fs')
const chalk = require('chalk')
const path  = require('path')
const addNote =(title,body,callback)=>{
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((note)=>note.title === title)
    // find stops searching when it finds the first matching element in array thus reducing the time consumed
    const duplicateNote = notes.find((note) => note.title === title)
    //console.log(duplicateNote)
    if (!duplicateNote){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        callback('New Note Added')

    }else {
        callback('Note Title Taken!')
    }
}
const saveNotes =(notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync(path.join(__dirname,'./notes.json'), dataJSON)
}
const loadNotes =()=>{
    try {
        const dataBuffer = fs.readFileSync(path.join(__dirname,'./notes.json'))
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}
const removeNote = (title,callback)=>{
    const notes = loadNotes()
    const NotesToKeep = notes.filter((note)=>note.title !== title)
    if (NotesToKeep.length === notes.length){
        callback('No note removed')
    }
    else{
        callback('Note Removed')
        saveNotes(NotesToKeep)
    }
}
const listNotes=(callback)=>{
    const note_titles = loadNotes()
    callback(note_titles)
    // notes.forEach(element => {
    //     console.log( element.title)
    // })
}
const readNote=(title,callback)=>{
    const notes = loadNotes()
    const note = notes.find(element=>element.title === title)
    if(note){
        callback(note.body)
    }else{
        callback('No Note Found')
    }
}
module.exports = {
    addNote :addNote,
    removeNote :removeNote,
    listNotes :listNotes,
    readNote :readNote
}