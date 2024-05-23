const { Link } = ReactRouterDOM
const { useState, useEffect, } = React
const { useParams, useNavigate } = ReactRouter


import { NotePreview } from './../cmps/NotePreview.jsx'
import { NoteEdit } from './../views/NoteEdit.jsx'

export function NoteList({ notes, onRemove }) {
    const navigate = useNavigate()
    const [openNoteId, setOpenNoteId] = useState(null)

    // useEffect(() => {
    //     if (openNoteId) {
    //         navigate(`/note/${openNoteId}`)
    //     }
    // }, [navigate, openNoteId])

    function openDialog(noteId) {
        console.log('noteId', noteId)
        setOpenNoteId(noteId)
    }

    function closeDialog() {
        setOpenNoteId(null)
    }


    return (
        <section className="note-list">
            {notes.map(note => (
                <div onClick={() => openDialog(note.id)} key={note.id} className="note">
                    {openNoteId === note.id && (
                        <NoteEdit
                            note={note}
                            onClose={closeDialog}
                        />
                    )}
                    <NotePreview note={note} onRemove={onRemove} />
                </div>
            ))}
        </section>
    )
}




