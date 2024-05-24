const { useState, useEffect } = React
const { useParams, useSearchParams } = ReactRouterDOM

import { eMailService } from '../services/eMailService.js'
import { MailList } from '../cmps/MailList.jsx'
import { SideMenu } from '../cmps/SideManu.jsx'
import { EmailDetails } from '../cmps/EmailDetails.jsx'
import { EmailFilter } from '../cmps/EmailFilter.jsx'
import { EmailCompose } from '../cmps/EmailCompose.jsx'

export function MailIndex() {
    const [emails, setEmails] = useState([])
    const [emailsCounter, setEmailsCounter] = useState(0)
    const [composeFlag, setComposeFlag] = useState(false)

    const params = useParams()


    useEffect(() => {
        eMailService.query()
            .then(emailsList => {
                setEmails(emailsList)
                onDisplayUnreadEmailsCnt()
            })
    }, [emailsCounter])

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


    return <div className='emails-container'>
        <EmailFilter />
        <SideMenu unreadMails={emailsCounter} toggleCompose={onToggleCompose} />

        {params.emailId && <EmailDetails unreadMails={emailsCounter}
            onDisplayUnreadEmailsCnt={onDisplayUnreadEmailsCnt} />}

        {!params.emailId &&
            <table>
                {emails.length > 0 && <MailList emails={emails} />}
            </table>}

        {composeFlag && <EmailCompose toggleCompose={onToggleCompose} saveSentEmail={onSaveSentEmail} />}

    </div>
}

