const { Link } = ReactRouterDOM

export function NotePreview({note, onRemove}) {
    return <article className="note-preview" style={{ backgroundColor: note.color }}>
        <h3>{note.id}</h3>
        <p>{note.info.txt}</p>
        <button onClick={() => onRemove(note.id)}  className="close-button">x</button>
    </article>

}