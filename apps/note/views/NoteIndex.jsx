const { useState, useEffect } = React

import { noteService } from './../services/note.service.js'

import { NoteList } from './../cmps/NoteList.jsx'
import { KeepHeader } from './../cmps/KeepHeader.jsx'



export function NoteIndex() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        noteService.query().then(notes => {
            setNotes(notes)
        })
    }, [])

return <section className="note-index">
    <KeepHeader />
    <NoteList notes={notes} />
</section>
}
