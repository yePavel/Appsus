const { useState } = React
const { Link } = ReactRouterDOM

import { eMailService } from '../services/emailService.js'
import { utilService } from '../../../services/util.service.js'

export function MailPreview({ mail, removeEmail, filterBy }) {
    const [currMail, setCurrMail] = useState(mail)

    function onSetIsRead() {
        setCurrMail(() => {
            let updatedMail
            if (filterBy.status === 'inbox')
                updatedMail = { ...currMail, isRead: true }
            else
                updatedMail = { ...currMail, isRead: false }

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
                    <div className='mail-prev-details'>
                        <span>⭐</span>
                        <p>{currMail.from}</p>
                    </div>
                    <p>{currMail.subject}</p>
                    <p>{getDateTime(currMail.sentAt)}</p>

                </div>
            </Link>
            <div className='email-actions'>
                <button onClick={(ev) => removeEmail(currMail.id, ev)}>
                    <img className='icon' src="/assets/img/mail-icons/trash.png" alt="" />
                </button>
            </div>
        </div>
    )
}