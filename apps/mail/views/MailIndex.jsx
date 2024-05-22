const { useState, useEffect } = React
const { Link } = ReactRouterDOM

import { eMailService } from '../services/eMailService.js'
import { MailList } from '../cmps/MailList.jsx'

export function MailIndex() {
    const [emails, setEmails] = useState([])

    useEffect(() => {
        eMailService.query()
            .then(emails => setEmails(emails))
    }, [])

    function onSaveEmails() {

    }

    return <div className='emails-container'>
        <button className='compose'><img className='icon' src="/assets/img/mail-icons/pencil.png" alt="" />Compose</button>
        <input type="text" className='search-input' />

        <aside className='side-menu'>
            <span><img className='icon' src="/assets/img/mail-icons/inbox.png" alt="" />Inbox </span>
            <span><img className='icon' src="/assets/img/mail-icons/star.png" alt="" />Starred </span>
            <span><img className='icon' src="/assets/img/mail-icons/sent.png" alt="" />Sent </span>
            <span><img className='icon' src="/assets/img/mail-icons/trash.png" alt="" />Trash </span>
        </aside>

        <table>
            {emails.length > 0 && <MailList emails={emails} />}
        </table>

    </div>
}

