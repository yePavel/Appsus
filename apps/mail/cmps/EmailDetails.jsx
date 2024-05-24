import { storageService } from "../../../services/storage.service.js"
import { eMailService } from "../../mail/services/eMailService.js"

const { useEffect, useState } = React
const { Link, useParams } = ReactRouterDOM

export function EmailDetails({ onDisplayUnreadEmailsCnt }) {
    const [email, setEmail] = useState({})
    const params = useParams()

    useEffect(() => {
        if (!params.emailId) return
        eMailService.get(params.emailId)
            .then(email => {
                setEmail(email)
                onDisplayUnreadEmailsCnt()
            })
    }, [])

    console.log('email:', email)

    return <div className='email-details'>
        <Link to={'/mail/'}><button>Go back</button></Link>

        <h3>Subject: {email.subject}</h3>
        <p>From: {email.from}</p>
        <p>To: {email.to}</p>
        <p className='mail-content'>{email.body}</p>
    </div>


}