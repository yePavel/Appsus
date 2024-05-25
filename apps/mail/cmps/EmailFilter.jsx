const { useState, useEffect } = React

export function EmailFilter({ filterBy, onFilter }) {
    const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })
    const { txt, isRead } = filterByToEdit

    function handleChange({ target }) {
        const { name, value } = target
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

    </div>

}