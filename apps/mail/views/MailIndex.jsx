const { useState, useEffect } = React
const { useParams } = ReactRouterDOM


import { eMailService } from '../services/eMailService.js'
import { MailList } from '../cmps/MailList.jsx'
import { SideMenu } from '../cmps/SideManu.jsx'
import { EmailDetails } from '../cmps/EmailDetails.jsx'
import { EmailFilter } from '../cmps/EmailFilter.jsx'

export function MailIndex() {
    const [emails, setEmails] = useState([])
    const [unreadMails, setUnreadMails] = useState(0)

    const params = useParams()

    useEffect(() => {
        eMailService.query()
            .then(emails => {
                setEmails(emails)
                displayUnreadEmailsCount(emails)
            })
    }, [])

    function displayUnreadEmailsCount(emails) {
        console.log('emails:', emails)
        let unReadEmails = emails.filter(email => !email.isRead).length
        setUnreadMails(prevCounter => prevCounter = unReadEmails)
    }

    return <div className='emails-container'>
        <EmailFilter />
        <SideMenu unreadMails={unreadMails} />

        {params.emailId && <EmailDetails />}
        {!params.emailId &&
            <table>
                {emails.length > 0 && <MailList emails={emails} />}
            </table>}

    </div>
}

