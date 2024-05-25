const { useState, useEffect, useRef } = React

import { Textbox } from './Textbox.jsx'
import { noteService } from './../services/note.service.js'

export function NoteAdd() {
    const [note, setNote] = useState(noteService.getEmptyNote())
    const wrapperRef = useRef(null)


    function onSaveNote(ev) {
        if (ev) ev.preventDefault()
        if (note.info.txt === '') return

        noteService.saveNewNote(note)
            .then(() => {
                console.log('Note saved successfully')

            })
            .catch(() => {
                alert('Could not save the note')
            })
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                onSaveNote()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [note])


    function handleChange({ target }) {
        const { type, name: prop } = target
        let { value } = target
        console.log('value', value)

        switch (type) {
            case 'range':
            case 'number':
                value = +value
                break
            case 'checkbox':
                value = target.checked
                break
        }

        setNote(prevNote => ({
            ...prevNote,
            info: {
                ...prevNote.info,
                [prop]: value
            }
        }))
    }

    return (
        <div className='note-add-txt'>
            <div className='note-add' ref={wrapperRef}>
                <form onSubmit={onSaveNote}>
                    <input
                        type='text'
                        name='title'
                        placeholder='Title'
                        value={note.info.title}
                        onChange={handleChange}
                        className='note-title'
                    />
                    <Textbox className='note-text' handleChange={handleChange} name='txt' value={note.info.txt} />
                    <button type='submit' className='save-note-button'>Save</button>
                </form>


            </div>
        </div>
    )



}