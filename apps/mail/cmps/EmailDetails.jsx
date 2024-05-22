import { storageService } from "../../../services/storage.service.js"
import { eMailService } from "../../mail/services/eMailService.js"

const { useEffect, useState } = React
const { Link, useSearchParams, useParams } = ReactRouterDOM

export function EmailDetails() {
    const [email, setEmail] = useState('')
    const params = useParams()

    useEffect(() => {
        if (!params.emailId) return
        eMailService.get(params.emailId)
            .then(email => setEmail(email))
    })

    return <div className='emails-container'>
        <button className='compose'><img className='icon' src="/assets/img/mail-icons/pencil.png" alt="" />Compose</button>
        <input type="text" className='search-input' />

        <aside className='side-menu'>
            <span><img className='icon' src="/assets/img/mail-icons/inbox.png" alt="" />Inbox </span>
            <span><img className='icon' src="/assets/img/mail-icons/star.png" alt="" />Starred </span>
            <span><img className='icon' src="/assets/img/mail-icons/sent.png" alt="" />Sent </span>
            <span><img className='icon' src="/assets/img/mail-icons/trash.png" alt="" />Trash </span>
        </aside>

        <div className='email-details'>

            <Link to={'/mail/'}><button>Go back</button></Link>
            <h3>Subject: {email.subject}</h3>
            <p>From: {email.from}</p>
            <p>To: {email.to}</p>
            <p className='mail-content'>{email.body}</p>
        </div>

    </div >
}