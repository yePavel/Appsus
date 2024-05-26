
const { useState, useEffect } = React
const { useSearchParams } = ReactRouterDOM

export function EmailCompose({ toggleCompose, saveSentEmail }) {
    const [searchParams, setSearchParams] = useSearchParams({ compose: 'new' })
    const [composeStatus, setComposeStatus] = useState(searchParams)

    console.log('searchParams:', searchParams.length)

    const [newEmail, setNewEmail] = useState({
        from: 'your mail',
        to: '',
        subject: '',
        bodyTxt: ''
    })

    const { from, to, subject, bodyTxt } = newEmail
    console.log('newEmail:', newEmail)
    useEffect(() => {
        setSearchParams(composeStatus)
    }, [])

    function handleChange({ target }) {
        const { value, name: prop } = target
        setNewEmail((prevEmail) => ({ ...prevEmail, [prop]: value }))
    }

    function onSaveEmail(ev) {
        ev.preventDefault()
        saveSentEmail(newEmail)
        toggleCompose()
    }

    return <section className='compose-container'>
        <form className='compose-form' onSubmit={onSaveEmail}>
            <div className='compose-modal'>
                <button onClick={() => toggleCompose()} className='btn-close-compose'>x</button>
                <p className='sent-email-header'>New Message</p>

                <div className='input-area'>
                    <div className='sent-from'>
                        <label htmlFor='from'>From</label>
                        <input
                            placeholder=''
                            name='from'
                            type='text'
                            id='from'
                            value={from}
                            onChange={handleChange}
                        />
                    </div>

                    <input
                        placeholder='To'
                        name='to'
                        type='text'
                        id='to'
                        value={to}
                        onChange={handleChange}
                        autoComplete='off'
                    />

                    <input
                        placeholder='Subject'
                        name='subject'
                        type='text'
                        id='subject'
                        value={subject}
                        onChange={handleChange}
                        autoComplete='off'
                    />

                    <textarea
                        name='body'
                        cols='30'
                        rows='10'
                        value={bodyTxt}
                        onChange={handleChange}
                    ></textarea>

                </div>

                <button className='sent-email-btn'>Save</button>
            </div>
        </form>
    </section>
}