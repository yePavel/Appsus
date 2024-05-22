
export function NotePreview({note}) {
    return <article className="note-preview">
        <h3>{note.id}</h3>
        <p>{note.info.txt}</p>
    </article>
}