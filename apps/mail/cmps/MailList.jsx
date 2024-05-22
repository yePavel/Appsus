

import { MailPreview } from "./MailPreview.jsx"

export function MailList({ emails }) {

    return <tbody className={'emails-list'}>
        {emails.map(email =>
            <tr key={email.id}>
                <td>
                    <MailPreview mail={email} />
                </td>
            </tr>)}
    </tbody>
}
