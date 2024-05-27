const { useState, useEffect, } = React
const { Link } = ReactRouterDOM
const { useNavigate } = ReactRouter



export function NoteHeader({ setIsSearching , filterByToEdit}) {
    const navigate = useNavigate()

    const [txt, setTxt] = useState('')


    function handleFocus() {
        setIsSearching(true)
    }

    function handle() {
        setIsSearching(false)
        navigate(`/note`)

    }

    function handleChange({ target }) {
        const { name, type, value } = target;
        const inputValue = type === 'number' ? +value : value
        setTxt(inputValue)
        console.log('setTxt', txt);
    }

    return <header className="header">
        <div className="header-title" onClick={handle}>
            <img src="https://img.icons8.com/?size=100&id=30655&format=png&color=000000" alt="Google Keep Logo" className="keep-icon" />
            <h1 className="title-text">Keep</h1>
        </div>

        <section className="search-container" onClick={handleFocus}>
            <div className="search-active">
                <Link to={`/note/search`}>
                    <input
                        value={txt}
                        name="txt"
                        type="search"
                        className="search-input"
                        onChange={ handleChange}
                        placeholder='Search'
                        autoFocus
                    />
                </Link>
            </div>
        </section>



        {/* Sidebar menu will be added here in the future */}
        {/* <SidebarMenu /> */}
    </header>
}