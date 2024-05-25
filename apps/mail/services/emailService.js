import { asyncStorageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'

const EMAIL_KEY = 'emailsDB'
const SENT_EMAIL_KEY = 'sentEmailsDB'

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

_createEmailsList()


export const eMailService = {
    query,
    get,
    save,
    remove,
    saveSendEmail,
}

window.ms = eMailService


function query(filterBy = {}) {
    return asyncStorageService.query(EMAIL_KEY)
        .then(emails => {
            if (filterBy.subject) {
                emails = emails.sort()
            }

            if (filterBy.sentAt) {
                emails = emails.sort()
            }

            return emails
        })
}

function get(mailId) {
    return asyncStorageService.get(EMAIL_KEY, mailId)
        .then(mail => {
            // mail = _setNextPrevMailId(mail)
            return mail
        })

}

function save(email) {
    if (email.id) {
        return asyncStorageService.put(EMAIL_KEY, email)
    }
    else {
        return asyncStorageService.post(EMAIL_KEY, email)
    }
}

function remove(email) {
    return asyncStorageService.remove(EMAIL_KEY, email)
}

function saveSendEmail(email) {
    const currEmail = _createEmail(email)
    return asyncStorageService.post(SENT_EMAIL_KEY, currEmail)
}


// ~~~~~~~~~~~~~~~~~~~~~~ LOCAL FUNC ~~~~~~~~~~~~~~~~

function _createEmail(emailToSave) {
    return {
        id: utilService.makeId(),
        ...emailToSave,
    }
}

function _setNextPrevMailId(mail) {
    return storageService.query(EMAIL_KEY)
        .then((emails) => {
            const mailIdx = emails.findIndex((currMail) => currMail.id === mail.id)
            const nextMail = emails[mailIdx + 1] ? emails[mailIdx + 1] : emails[0]
            const prevMail = emails[mailIdx - 1] ? emails[mailIdx - 1] : emails[emails.length - 1]
            mail.nextCarId = nextMail.id
            mail.prevCarId = prevMail.id
            return car
        })
}

function _createEmailsList() {
    let emailsList = storageService.loadFromStorage(EMAIL_KEY) || []
    if (!emailsList || !emailsList.length) {
        for (let i = 0; i < 10; i++) {
            const email = {
                id: utilService.makeId(),
                subject: utilService.makeLorem(3),
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: utilService.getRandomDate(),
                removedAt: null,
                from: `${utilService.getUserEmail()}`,
                to: loggedinUser.email
            }
            emailsList.push(email)
        }
        storageService.saveToStorage(EMAIL_KEY, emailsList)
    }
}
