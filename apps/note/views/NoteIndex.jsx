const { useState, useEffect } = React

import { noteService } from './../services/note.service.js'

import { NoteList } from './../cmps/NoteList.jsx'
import { NoteHeader } from './../cmps/NoteHeader.jsx'
import { NoteAdd } from './../cmps/NoteAdd.jsx'



export function NoteIndex() {
    const [notes, setNotes] = useState([])
    
    useEffect(() => {
        loadNotes()
    }, [])

    function loadNotes() {
        noteService.query().then(notes => {
            setNotes(notes)
        })

    }
  
    function removeNote(noteId) {
        noteService.remove(noteId)
            .then(() => {
                setNotes(prevNots => prevNots.filter(note => note.id != noteId))
                // showSuccessMsg(`Node removed successfully!`)
            })
            .catch(err => {
                console.log('err:', err)
                // showErrorMsg('There was a problem')
            })

    }

    return <section className="note-index">
        <NoteHeader />
        <NoteAdd />
        <NoteList notes={notes} onRemove={removeNote} /> 
    </section>
}
