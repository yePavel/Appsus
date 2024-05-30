const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouter
const { useLocation } = ReactRouterDOM

import { noteService } from './../services/note.service.js'

import { NoteList } from './../cmps/NoteList.jsx'
import { NoteHeader } from './../cmps/NoteHeader.jsx'
import { NoteAdd } from './../cmps/NoteAdd.jsx'
import { NoteFilter } from './../cmps/NoteFilter.jsx'
import { NoteNavBar } from '../cmps/NoteNavBar.jsx'
import { NoteTrash } from '../cmps/NoteTrash.jsx'



export function NoteIndex() {
    const params = useParams()
    const navigate = useNavigate()
    const [notes, setNotes] = useState([])
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [isSearching, setIsSearching] = useState(false)
    const [isClickLink, setIsClickLink] = useState(false)
    const [filterBy, setFilterBy] = useState(noteService.getDefaultFilter())

    useEffect(() => {
        if (params.noteId === 'search' || params.noteId === 'trash') {
            if (params.noteId === 'search') setIsSearching(true)

            if (params.noteId === 'trash') setIsClickLink(true)

        } else {
            setIsSearching(false)
            setIsClickLink(false)
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


    function moveNote(noteId) {
        noteService.moveToTrash(noteId)
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
        setFilterBy({ ...newFilter })
    }

    function onActiveLink(link) {
        navigate(`/note/${link}`)
    }




    return (
        <section className="note-index">
            <NoteHeader filterBy={filterBy} onFilter={onSetFilterBy} onLoad={loadNotes} isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
            <div className={`note-content ${isNavOpen ? 'content-shifted' : ''} `}>
                {!isClickLink && !isSearching && <NoteAdd onLoad={loadNotes} />}
                {!isClickLink && <NoteList notes={notes} onMoveTrash={moveNote} onLoad={loadNotes} />}
                {isClickLink && <NoteTrash onLoad={loadNotes} />}
            </div>
            {isNavOpen && <NoteNavBar isNavOpen={isNavOpen} onActiveLink={onActiveLink} />}
           
        </section>
    )
}