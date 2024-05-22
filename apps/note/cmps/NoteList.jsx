import { NotePreview } from './../cmps/NotePreview.jsx'

export function NoteList({ notes }) {
    return (
        <section className="note-list">
            <ul>
            {notes.map(note => (
                <div key={note.id} className="note">
                    <NotePreview note={note}/>
                </div>
            ))}
            </ul>
        </section>
    )
}