const { useState } = React
const { Link } = ReactRouterDOM

import { eMailService } from '../services/eMailService.js'

export function MailPreview({ mail, removeEmail }) {
    const [currMail, setCurrMail] = useState(mail)

    function onSetIsRead() {
        setCurrMail((prevMail) => {
            const updatedMail = { ...currMail, isRead: true }
            eMailService.save(updatedMail)
        })
    }

    return (
        <div className={`email-preview-container ${currMail.isRead ? 'isRead' : ''}`}>
            <Link to={`/mail/${mail.id}`}>
                <div className={`mail-preview`}
                    onClick={() => onSetIsRead()}>
                    ⭐
                    <p>{mail.from}</p>
                    <p>{mail.subject}</p>
                    <p>{mail.sentAt}</p>

                </div>
            </Link>
            <div className='email-actions'>
                <button onClick={(ev) => removeEmail(mail.id, ev)}>
                    <img className='icon' src="/assets/img/mail-icons/trash.png" alt="" />
                </button>
            </div>
        </div>
    )
}