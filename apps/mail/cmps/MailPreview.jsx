const { useState } = React
const { Link } = ReactRouterDOM

import { eMailService } from '../services/emailService.js'
import { utilService } from '../../../services/util.service.js'

export function MailPreview({ mail, removeEmail, filterBy }) {
    const [currMail, setCurrMail] = useState(mail)

    function onSetIsRead() {
        setCurrMail(() => {
            console.log('updatedMail:', updatedMail)
            const updatedMail = { ...currMail, isRead: true }
            eMailService.save(updatedMail, filterBy)
        })
    }

    function getDateTime(date) {
        let month = utilService.getMonthName(date)
        let year = utilService.getYear(date)

        if (year < 2023) return year
        if (year >= 2023) return month + " " + year
    }

    return (
        <div className={`email-preview-container ${currMail.isRead ? 'isRead' : ''}`}>
            <Link to={`/mail/${mail.id}`}>
                <div className={`mail-preview`}
                    onClick={() => onSetIsRead()}>
                    ⭐
                    <p>{mail.from}</p>
                    <p>{mail.subject}</p>
                    <p>{getDateTime(mail.sentAt)}</p>

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