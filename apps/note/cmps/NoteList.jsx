

export function NoteList({ notes }) {
    return (
        <div className="note-list">
            {notes.map(note => (
                <div key={note.id} className="note">
                    <h3>{note.type}</h3>
                    <p>{note.info.txt}</p>
                </div>
            ))}
        </div>
    )
}