const { useState } = React
const { Link } = ReactRouterDOM

import { eMailService } from '../services/eMailService.js'

export function MailPreview({ mail }) {
    const [currMail, setCurrMail] = useState(mail)

    function onSetIsRead() {
        setCurrMail((prevMail) => {
            const updatedMail = { ...currMail, isRead: true }
            eMailService.save(updatedMail)
        })
    }

    return (
        <Link to={`/mail/${mail.id}`}>
            <div className={`mail-preview ${currMail.isRead ? 'isRead' : ''}`}
                onClick={() => onSetIsRead()}>
                ⭐
                <p>{mail.from}</p>
                <p>{mail.subject}</p>
                <p>{mail.sentAt}</p>
            </div>
        </Link>
    )
}