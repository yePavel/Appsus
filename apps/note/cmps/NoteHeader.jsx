const { useState, useEffect } = React
const { useNavigate } = ReactRouter


export function NoteHeader({ filterBy, onFilter, onLoad, isNavOpen, setIsNavOpen }) {
    const navigate = useNavigate()
    const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })


    useEffect(() => {

        onFilter(filterByToEdit)
        onLoad()

    }, [filterByToEdit])

    function handleChange({ target }) {
        const { name, type } = target
        const value = (type === 'number') ? +target.value : target.value
        setFilterByToEdit(prevFilterBy => ({ ...prevFilterBy, [name]: value }))
    }

    function handleFocus() {
        navigate('/note/search')
    }

    function toggleNavbar() {
        setIsNavOpen(!isNavOpen)
    }

    return <header className="header" >
        <div className="note-navbar">
            <div className="note-hamburger" onClick={toggleNavbar}>
                <div className="note-bar"></div>
                <div className="note-bar"></div>
                <div className="note-bar"></div>
            </div>
        </div>

        <div className="header-title" >
            <img src="https://img.icons8.com/?size=100&id=30655&format=png&color=000000" alt="Google Keep Logo" className="keep-icon" />
            <h1 onClick={() => navigate(`/note`)} className="title-text">Keep</h1>
        </div>

        <section className="search-container" >
            <div className="search-active">

                <input
                    value={filterByToEdit.txt}
                    name="txt"
                    type="search"
                    className="search-input"
                    onChange={handleChange}
                    onFocus={handleFocus}
                    placeholder='Search'
                    autoFocus
                />


            </div>
        </section>



        {/* Sidebar menu will be added here in the future */}
        {/* <SidebarMenu /> */}
    </header>
}