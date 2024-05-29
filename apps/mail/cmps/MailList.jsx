
import { MailPreview } from "./MailPreview.jsx"

export function MailList({ emails, removeEmail, filterBy }) {

    return <tbody className={'emails-list'}>
        {emails.map(email =>
            <tr key={email.id}>
                <td>
                    <MailPreview mail={email} email removeEmail={removeEmail} filterBy={filterBy} />
                </td>
            </tr>)}
    </tbody>
}
