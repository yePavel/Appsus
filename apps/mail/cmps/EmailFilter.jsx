const { useState, useEffect } = React

export function EmailFilter({ filterBy, onFilter }) {
    const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })
    const { txt } = filterByToEdit

    function handleChange({ target }) {
        const { name, type } = target
        let value = (type === 'checkbox') ? target.checked : target.value
        setFilterByToEdit(prevFilterBy =>
            ({ ...prevFilterBy, [name]: value })
        )
    }

    useEffect(() => {
        onFilter(filterByToEdit)
    }, [filterByToEdit])

    return <div className='search-container'>
        <input
            type="text"
            name='txt'
            className='search-input'
            value={txt}
            onChange={handleChange}
        />

        <label htmlFor="subject">
            <input id='subject' type="checkbox"
                name='subject'
                className='sort-by-subject'
                onChange={handleChange} />
            <span>Sort by subject</span>
        </label>

        <label htmlFor="sentAt">
            <input id='sentAt' type="checkbox"
                name='sentAt'
                className='sort-by-sentAt'
                onChange={handleChange} />
            <span>Sort by date</span>
        </label>

        <div className='radio-inputs'>
            <label className="radio">
                <input id='all'
                    value='all'
                    type="radio"
                    name="isRead"
                    onChange={handleChange} />
                <span className="name">All</span>
            </label>

            <label className="radio">
                <input id='unread'
                    value='unread'
                    type="radio"
                    name="isRead"
                    onChange={handleChange} />
                <span className="name">Unread</span>
            </label>

        </div>

    </div>

}