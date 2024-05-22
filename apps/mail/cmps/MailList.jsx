import { MailPreview } from "./MailPreview.jsx"

export function MailList({ emails }) {


    return <tbody className='emails-list'>
        {emails.map(email =>
            <tr key={emails.id}>
                <MailPreview mail={email} />
            </tr>
        )}
    </tbody>
}
