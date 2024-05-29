
export function NotePreview({note, onRemove}) {

    function handleRemoveClick(ev){
        ev.stopPropagation() 
        ev.preventDefault()
        onRemove(note.id)
    }

    return <article className="note-preview" style={{ backgroundColor: note.style.backgroundColor }}>
        <h3>{note.info.title}</h3>
        <p>{typeof note.info.txt === 'string' ? note.info.txt : ''}</p>
        <span>last update {note.createdAt}</span>
        <button type='button' onClick={handleRemoveClick}   className="close-button">x</button>
    </article>

}

