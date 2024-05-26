
import { MailPreview } from "./MailPreview.jsx"

export function MailList({ emails, removeEmail }) {

    return <tbody className={'emails-list'}>
        {emails.map(email =>
            <tr key={email.id}>
                <td>
                    <MailPreview mail={email} email removeEmail={removeEmail} />
                </td>
            </tr>)}
    </tbody>
}
