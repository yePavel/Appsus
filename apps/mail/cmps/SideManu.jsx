const { useEffect, useState } = React
const { useSearchParams } = ReactRouterDOM

import { eMailService } from "../services/emailService.js"

export function SideMenu({ unreadMails, toggleCompose }) {
    const [searchParams, setSearchParams] = useSearchParams()
    const [filterBy, setFilterBy] = useState(eMailService.getFilterFromSearchParams(searchParams))
    console.log('filterBy:', filterBy)

    function handleChange(newLabel) {
        console.log('newLabel:', newLabel)
        setFilterBy({ ...filterBy, status: newLabel })
    }

    return <div className='side-menu-container'>
        <button className='compose-btn' onClick={() => toggleCompose()}>
            <img className='icon' src="/assets/img/mail-icons/pencil.png" alt="" />
            Compose
        </button>

        <aside className='side-menu'>
            <p className={`${filterBy.status === 'inbox' ? 'active-label' : ''}`}
                onClick={() => handleChange('inbox')}>
                <img className='icon' src="/assets/img/mail-icons/inbox.png" alt="" />
                Inbox
                {unreadMails > 0 && <span className='unread-counter'>{unreadMails}</span>}
            </p>
            <p>
                <img className='icon' src="/assets/img/mail-icons/star.png" alt="" />
                Starred
            </p>
            <p>
                <img className='icon' src="/assets/img/mail-icons/draft.png" alt="" />
                Draft
            </p>
            <p className={`${filterBy.status === 'sent' ? 'active-label' : ''}`}
                onClick={() => handleChange('sent')}>
                <img className='icon' src="/assets/img/mail-icons/sent.png" alt="" />
                Sent
            </p>
            <p>
                <img className='icon' src="/assets/img/mail-icons/trash.png" alt="" />
                Trash
            </p>
        </aside>
    </div>

}