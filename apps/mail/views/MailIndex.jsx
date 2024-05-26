const { useState, useEffect } = React
const { useNavigate } = ReactRouter
const { useParams, useSearchParams } = ReactRouterDOM

import { eMailService } from '../services/emailService.js'
import { SideMenu } from '../cmps/SideManu.jsx'
import { MailList } from '../cmps/MailList.jsx'
import { EmailDetails } from '../cmps/EmailDetails.jsx'
import { EmailFilter } from '../cmps/EmailFilter.jsx'
import { EmailCompose } from '../cmps/EmailCompose.jsx'

export function MailIndex() {
    const [emails, setEmails] = useState([])
    const [emailsCounter, setEmailsCounter] = useState(0)
    const [composeFlag, setComposeFlag] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const [filterBy, setFilterBy] = useState(eMailService.getFilterFromSearchParams(searchParams))

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        setSearchParams(filterBy)
        eMailService.query(filterBy)
            .then(emailsList => {
                setEmails(emailsList)
                onDisplayUnreadEmailsCnt()
            })
    }, [emailsCounter, filterBy])

    function onDisplayUnreadEmailsCnt() {
        eMailService.query()
            .then(emailsList => {
                let counter = emailsList.filter(email => !email.isRead).length
                setEmailsCounter(prevCounter => prevCounter = counter)
            })
    }

    function onToggleCompose() {
        setComposeFlag(prevCompose => !prevCompose)
    }

    function onSaveSentEmail(sentEmail) {
        eMailService.saveSendEmail(sentEmail)
    }

    function onRemoveEmail(emailId, ev) {
        ev.stopPropagation()
        eMailService.remove(emailId)
            .then(() => {
                setEmails(prevEmails => prevEmails.filter(email => email.id !== emailId))
                navigate('/mail')
            })
            .catch(err => console.log('err:', err))
    }

    function onSetFilterBy(newFilter) {
        setFilterBy({ ...newFilter })
    }

    return <div className='emails-container'>
        <img className='main-icon' src="/assets/img/mail-icons/gmail-icon.png" alt="gmail-icon" />
        <EmailFilter filterBy={filterBy} onFilter={onSetFilterBy} />
        <SideMenu unreadMails={emailsCounter} toggleCompose={onToggleCompose} />

        {params.emailId && <EmailDetails unreadMails={emailsCounter}
            onDisplayUnreadEmailsCnt={onDisplayUnreadEmailsCnt} removeEmail={onRemoveEmail} />}

        {!params.emailId &&
            <table>
                {emails.length > 0 && <MailList emails={emails} removeEmail={onRemoveEmail} />}
            </table>}

        {composeFlag && <EmailCompose toggleCompose={onToggleCompose} saveSentEmail={onSaveSentEmail} />}

    </div>
}

