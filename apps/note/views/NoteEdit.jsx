const { Link } = ReactRouterDOM
const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouter

import { noteService } from './../services/note.service.js'
import { Textbox } from './../cmps/Textbox.jsx'

export function NoteEdit({ note, onClose }) {
    const [noteTxt, setNoteTxt] =useState({ info: { txt: note.info.txt } })

    // function onSaveNote(ev) {
    //     ev.preventDefault()

    //     noteService.updateNote(note, noteTxt)
    //         .then(() => console.log('its ok '))
    //         .catch(() => {
    //             alert('couldnt save')
    //         })
    // }
    
    function handleChange({ target }) {
         const { type, name: prop } = target
        let { value } = target
  

        switch (type) {
            case 'range':
            case 'number':
                value = +value
                break
            case 'checkbox':
                value = target.checked
                break
        }

        setNoteTxt((prevTxt) => ({
          ...prevTxt,
          info: {
            ...prevTxt.info,
            txt: value
          }
        }))
        
    }

    return (
        <dialog open={true} className="note-dialog" onClick={(ev) => ev.stopPropagation()}>
            <form>
                <Textbox handleChange={handleChange} txt={noteTxt.info.txt} />
                <button onClick={onClose} className="close-button">x</button>
                <button>Save</button>
            </form>
        </dialog>
    )

}
// 