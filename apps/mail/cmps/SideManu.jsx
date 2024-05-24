
export function SideMenu({ unreadMails }) {

    return <div>
        <button className='compose'>
            <img className='icon' src="/assets/img/mail-icons/pencil.png" alt="" />
            Compose
        </button>

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
    </div>

}