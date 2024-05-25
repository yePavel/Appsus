const { Link } = ReactRouterDOM

export function NotePreview({note, onRemove}) {
    return <article className="note-preview" style={{ backgroundColor: note.color }}>
        <h3>{note.info.title}</h3>
        <p>{typeof note.info.txt === 'string' ? note.info.txt : ''}</p>
        <span>last update {note.createdAt}</span>
        <button onClick={() => onRemove(note.id)}  className="close-button">x</button>
    </article>

}

