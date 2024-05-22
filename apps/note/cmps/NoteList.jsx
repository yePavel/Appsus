const { Link } = ReactRouterDOM
import { NotePreview } from './../cmps/NotePreview.jsx'

export function NoteList({ notes, onRemove}) {
    return (
        <section className="note-list">
            <ul>
            {notes.map(note => (
                <div key={note.id} className="note">
                    <NotePreview note={note}/>
                    <button onClick={() => onRemove(note.id)}>x</button>
                    <Link to={`/note/${note.id}`}><button>Edit</button></Link>
                </div>
            ))}
            </ul>
        </section>
    )
}