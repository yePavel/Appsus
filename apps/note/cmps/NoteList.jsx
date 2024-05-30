const { Link } = ReactRouterDOM
const { useState, useEffect, } = React
const { useParams, useNavigate } = ReactRouter


import { NotePreview } from './NotePreview.jsx'
import { NoteEdit } from './NoteEdit.jsx'

export function NoteList({ notes, onMoveTrash, onLoad }) {
    const navigate = useNavigate()
    const params = useParams()
    const [openNoteId, setOpenNoteId] = useState(null)


    useEffect(() => {
        if (params.noteId && params.noteId !== 'search' && params.noteId !== 'trash') {
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

    function onStickyNotes(note) {
        navigate(`/note`)
        onLoad()
    }

    function renderNotes(filterCondition) {
        return notes
            .filter(filterCondition)
            .map(note => (
                <Link key={note.id} to={`/note/${note.id}`}>
                    <div className="note">
                        <NotePreview note={note} onMoveTrash={onMoveTrash} onStickyNotes={onStickyNotes} />
                    </div>
                </Link>
            ))
    }


    return (
        <section>
            <div className="note-list pinned">
                {renderNotes(note => note.isPinned === true)}
            </div>

            <div className="separator"></div>

            <div className="note-list unpinned" >
                {renderNotes(note => note.isPinned === false)}
            </div>

            {openNoteId && (
                <NoteEdit
                    noteId={params.noteId}
                    onClose={closeDialog}
                />
            )}
        </section>
    )
}


// return (
//     <section className="note-list">
//         {notes.map(note => (
//             <Link key={note.id} to={`/note/${note.id}`}>
//                 <div className="note">
//                     <NotePreview note={note} onMoveTrash={onMoveTrash} onStickyNotes={onStickyNotes}/>
//                 </div>
//             </Link>
//         ))}
//         {openNoteId && (
//             <NoteEdit
//                 noteId={params.noteId}
//                 onClose={closeDialog}
//             />
//         )}
//     </section>

// )
// }

// return (
//     <section >
//         <div className="note-list">
//         {notes
//             .filter(note => {
//                 if (note.isPinned === undefined) {
//                     console.log('Note without isPinned:', note);
//                 }
//                 return note.isPinned === false;
//             })
//             .map(note => (
//                 <Link key={note.id} to={`/note/${note.id}`}>
//                     <div className="note">
//                         <NotePreview note={note} onMoveTrash={onMoveTrash} onStickyNotes={onStickyNotes} />
//                     </div>
//                 </Link>
//             ))}
//             </div>
//         {openNoteId && (
//             <NoteEdit
//                 noteId={params.noteId}
//                 onClose={closeDialog}
//             />
//         )}
//     </section>
// )
// }


