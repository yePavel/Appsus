const { useState, useEffect } = React

import { eMailService } from '../services/eMailService.js'
import { MailList } from '../cmps/MailList.jsx'

export function MailIndex() {
    const [emails, setEmails] = useState([])
    const [unreadMails, setUnreadMails] = useState(0)

    useEffect(() => {
        eMailService.query()
            .then(emails => {
                setEmails(emails)
                displayUnreadEmailsCount(emails)
            })
    }, [])

    function displayUnreadEmailsCount(emails) {
        console.log('emails:', emails)
        let unReadEmails = emails.filter(email => email.isRead).length
        setUnreadMails(prevCounter => prevCounter = unReadEmails)
    }

    return <div className='emails-container'>
        <button className='compose'><img className='icon' src="/assets/img/mail-icons/pencil.png" alt="" />Compose</button>
        <input type="text" className='search-input' />

        <aside className='side-menu'>
            <p>
                <img className='icon' src="/assets/img/mail-icons/inbox.png" alt="" />
                Inbox
                {unreadMails > 0 && <span className='unread-counter'>{unreadMails}</span>}
            </p>
            <p>
                <img className='icon' src="/assets/img/mail-icons/star.png" alt="" />
                Starred
            </p>
            <p>
                <img className='icon' src="/assets/img/mail-icons/sent.png" alt="" />
                Sent
            </p>
            <p>
                <img className='icon' src="/assets/img/mail-icons/trash.png" alt="" />
                Trash
            </p>
        </aside>

        <table>
            {emails.length > 0 && <MailList emails={emails} unReadCounter={unreadMails} />}
        </table>

    </div>
}

