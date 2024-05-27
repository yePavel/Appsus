const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouter

import { noteService } from './../services/note.service.js'

import { NoteList } from './../cmps/NoteList.jsx'
import { NoteHeader } from './../cmps/NoteHeader.jsx'
import { NoteAdd } from './../cmps/NoteAdd.jsx'
import { NoteFilter } from './../cmps/NoteFilter.jsx'



export function NoteIndex() {
    const [notes, setNotes] = useState([])
    const [isSearching, setIsSearching] = useState(false)
    const params = useParams()

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
        <NoteHeader setIsSearching={setIsSearching} />
        {isSearching && <NoteFilter />}
        {!isSearching && <NoteAdd onLoad={loadNotes} />}
        {!isSearching && <NoteList notes={notes} onRemove={removeNote} />}
    </section>
}
