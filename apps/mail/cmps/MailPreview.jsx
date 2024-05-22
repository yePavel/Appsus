const { useState } = React
const { Link } = ReactRouterDOM

import { eMailService } from '../services/eMailService.js'

export function MailPreview({ mail }) {
    const [currMail, setCurrMail] = useState(mail)

    function onSetIsRead(mailId) {
        setCurrMail((prevMail) => {
            const currIsRead = prevMail.isRead
            const updatedMail = { ...currMail, isRead: !currIsRead }
            eMailService.save(updatedMail)
        })
    }

    return (
        <Link to={`/mail/${mail.id}`}>
            <div className={`mail-preview ${currMail.isRead ? 'isRead' : ''}`}
                onClick={() => onSetIsRead(mail.id)}>
                ⭐
                <p>{mail.from}</p>
                <p>{mail.subject}</p>
                <p>{mail.sentAt}</p>
            </div>
        </Link>
    )
}