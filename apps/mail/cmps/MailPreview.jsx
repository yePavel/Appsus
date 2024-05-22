export function MailPreview({ mail }) {
    return (
        <td className="mail-preview">
            ⭐
            <span>{mail.from}</span>
            <span>{mail.subject}</span>
            <span>{mail.sentAt}</span>
        </td>
    )
}