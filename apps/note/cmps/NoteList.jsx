const { Link } = ReactRouterDOM
const { useState, useEffect, } = React
const { useParams, useNavigate } = ReactRouter


import { NotePreview } from './NotePreview.jsx'
import { NoteEdit } from './NoteEdit.jsx'

export function NoteList({ notes, onRemove}) {
    const navigate = useNavigate()
    const params = useParams()
    const [openNoteId, setOpenNoteId] = useState(null)

    useEffect(() => {
        if (params.noteId) {
            setOpenNoteId(params.noteId)
        } else {
            setOpenNoteId(null)
        }
    }, [params])

    function closeDialog() {
        navigate(`/note`)
        setOpenNoteId(null)
    }

    return (
        <section className="note-list">
        {notes.map(note => (
            <Link key={note.id} to={`/note/${note.id}`}>
                <div className="note">
                    <NotePreview note={note} onRemove={onRemove} />
                </div>
            </Link>
        ))}
        {openNoteId && (
            <NoteEdit
                noteId={params.noteId}
                onClose={closeDialog}
            />
        )}
    </section>
    
    )
}




