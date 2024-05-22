import { asyncStorageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'

const STORAGE_KEY = 'emailsDB'
_createEmailsList()

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

export const mailService = {
    query
}

window.ms = mailService


function query(filterBy = {}) {
    return asyncStorageService.query(STORAGE_KEY)
        .then(emails => {
            if (filterBy.subject) {
                emails = emails.sort()
            }

            if (filterBy.sentAt) {
                emails = emails.sort()
            }
            console.log('emailsFromQuery:', emails)
            return emails
        })
}



// ~~~~~~~~~~~~~~~~~~~~~~ LOCAL FUNC ~~~~~~~~~~~~~~~~

function _createEmailsList() {
    const emailsList = []

    for (let i = 0; i < 10; i++) {
        const email = {
            id: utilService.makeId(),
            subject: utilService.makeLorem(3),
            body: 'Would love to catch up sometimes',
            isRead: false,
            sentAt: utilService.getRandomDate(),
            removedAt: null,
            from: `${utilService.getUserEmail()}`,
            to: 'user@appsus.com'
        }
        emailsList.push(email)
    }
    storageService.saveToStorage(STORAGE_KEY, emailsList)
}

