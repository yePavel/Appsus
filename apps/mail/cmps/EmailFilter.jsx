const { useState, useEffect } = React

export function EmailFilter({ filterBy, onFilter }) {
    const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })
    const { txt, isRead } = filterByToEdit

    function handleChange({ target }) {
        const { name, value } = target
        console.log('target:', target)
        setFilterByToEdit(prevFilterBy => ({ ...prevFilterBy, [name]: value }))
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
            onChange={handleChange} />


        <div className='radio-inputs'>
            <label className="radio">
                <input id='all' value='all' type="radio" name="isRead" onChange={handleChange} />
                <span className="name">All</span>
            </label>

            <label className="radio">
                <input id='unread' value='unread' type="radio" name="isRead" onChange={handleChange} />
                <span className="name">Unread</span>
            </label>

        </div>

    </div>

}