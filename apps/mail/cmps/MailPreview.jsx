const { Link } = ReactRouterDOM

export function MailPreview({ mail }) {
    return (
        <Link to={`/mail/${mail.id}`}>
            <div className="mail-preview">
                ⭐
                <p>{mail.from}</p>
                <p>{mail.subject}</p>
                <p>{mail.sentAt}</p>
            </div>
        </Link>
    )
}