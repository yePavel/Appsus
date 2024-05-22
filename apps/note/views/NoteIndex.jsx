
import { check } from './../services/note.service.js'

export function NoteIndex() {
    return <div>{check.query()}</div>
}
