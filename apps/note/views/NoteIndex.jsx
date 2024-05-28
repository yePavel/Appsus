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
    const [filterBy, setFilterBy] = useState(noteService.getDefaultFilter())


    useEffect(() => {
        if (params.noteId === 'search') {
            setIsSearching(true)
        } else {
            setIsSearching(false)
        }
    }, [params.noteId])


    useEffect(() => {
        loadNotes(filterBy)
    }, [filterBy])

    function loadNotes() {
        noteService.query(filterBy)
            .then(notes => {
                setNotes(notes)
            })
            .catch(err => console.error('Error fetching notes:', err))
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

    function onSetFilterBy(newFilter) {
        setFilterBy({ ...newFilter });
    }

    return <section className="note-index">
        <NoteHeader filterBy={filterBy} onFilter={onSetFilterBy} onLoad={loadNotes} />
        {!isSearching && <NoteAdd onLoad={loadNotes} />}
        {<NoteList notes={notes} onRemove={removeNote} onLoad={loadNotes} />}
    </section>
}

