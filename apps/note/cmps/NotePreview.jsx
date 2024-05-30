const { useState, useEffect } = React

import { noteService } from './../services/note.service.js'
        
export function NotePreview({ note, onMoveTrash, onRecycling }) {
    const [isPined, setIsPined] =useState(note.isPined)
    function handleClick(ev) {
        ev.stopPropagation()
        ev.preventDefault()


        if (ev.target.name === 'remove') {
            console.log('remove',)
            onMoveTrash(note.id)
        }

        if (ev.target.name === 'recycling') {
            console.log('recycling')
            onRecycling(note.id)
        }

    }

    function onSelect(ev) {
        ev.stopPropagation()
        ev.preventDefault()

        note.isPined = !note.isPined 

        noteService.save(note)
            .then(() => {
                setIsPined( note.isPined)
                // onStickyNotes(note)
            })
    }

    return <article className="note-preview" style={{ backgroundColor: note.style.backgroundColor }}>
        {!note.isRemoved && ( <span style={{ cursor: 'pointer' }} onClick={onSelect}>
        {isPined ? '★' : '☆'}
      </span>) }
  
        <h3>{note.info.title}</h3>
        <p>{typeof note.info.txt === 'string' ? note.info.txt : ''}</p>
        <span>last update {note.createdAt}</span>

        <div className="button-container">
            {note.isRemoved && (
                <button name='recycling' onClick={handleClick} className="recycling-button">♻️</button>
            )}
            <button name='remove' onClick={handleClick} className="close-button">🗑️</button>
        </div>
    </article>

}

