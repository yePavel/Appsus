// note service
import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'
import { asyncStorageService } from '../../../services/async-storage.service.js'

const NOTE_KEY = 'noteDB'
_createNotes()

export const noteService = {
    query,
    get,
    remove,
    save,
    getDefaultFilter,
    getFilterFromSearchParams,
    updateNote,
    getEmptyNote,

}

function query() {
    return asyncStorageService.query(NOTE_KEY)
        .then(notes => {

            return notes
        })
}

function get(noteId) {
    return asyncStorageService.get(NOTE_KEY, noteId)
        .then(note => {
            note = _setNextPrevNoteId(note)
            return note
        })
}

function remove(noteId) {
    return asyncStorageService.remove(NOTE_KEY, noteId)
}

function save(note) {
    if (note.id) {
        return asyncStorageService.put(NOTE_KEY, note)
    } else {
        return asyncStorageService.post(NOTE_KEY, note)
    }
}

function getDefaultFilter(filterBy = { txt: '' }) {
    return { txt: filterBy.txt }
}

function getFilterFromSearchParams(searchParams) {
    return {
        txt: searchParams.get('txt') || '',
    }
}

function updateNote(note, newTxt) {
    note.info.txt = newTxt

    console.log('note after from service:', note)
    return Promise.resolve(note)
}
function getEmptyNote(txt = '') {
  return {
        id: utilService.makeId(),
        createdAt: 1112222,
        type: 'NoteTxt',
        isPinned: true,
        style: {
            backgroundColor: '#00d'
        },
        info: {
            txt
        }
    }
}


//privet function 

function _createNotes() {
    let notes = storageService.loadFromStorage(NOTE_KEY) || []

    if (notes && notes.length) return

    for (let i = 0; i < 10; i++) {
        const note = {
            id: utilService.makeId(),
            createdAt: 1112222,
            type: 'NoteTxt',
            isPinned: true,
            style: {
                backgroundColor: '#00d'
            },
            info: {
                txt: 'Fullstack Me Baby!'
            }
        }
        notes.push(note)
    }

    storageService.saveToStorage(NOTE_KEY, notes)
}


function _setNextPrevNoteId(note) {
    return asyncStorageService.query(NOTE_KEY).then((notes) => {
        const noteIdx = notes.findIndex((currNote) => currNote.id === note.id)
        const nextNote = notes[noteIdx + 1] ? notes[noteIdx + 1] : notes[0]
        const prevNote = notes[noteIdx - 1] ? notes[noteIdx - 1] : notes[notes.length - 1]
        note.nextNoteId = nextNote.id
        note.prevNoteId = prevNote.id
        return note
    })
}
