const { Link } = ReactRouterDOM
const { useState, useEffect, } = React
const { useParams, useNavigate } = ReactRouter


import { NotePreview } from './NotePreview.jsx'
import { NoteEdit } from './NoteEdit.jsx'

export function NoteList({ notes, onRemove ,onLoad}) {
    const navigate = useNavigate()
    const params = useParams()
    const [openNoteId, setOpenNoteId] = useState(null)
 

    useEffect(() => {
        if (params.noteId && params.noteId !== 'search') {
            setOpenNoteId(params.noteId)
        } else {
            setOpenNoteId(null)
        }
    }, [params])

    function closeDialog() {
        setOpenNoteId(null)
        navigate(`/note`)
        onLoad()
        
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




