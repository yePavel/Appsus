const { Link } = ReactRouterDOM
const { useState, useEffect } = React


export function NoteNavBar({ isNavOpen }) {
    const [activeLink, setActiveLink] = useState(null)

    return (
        <div className={`side-nav ${isNavOpen ? 'open' : ''}`}>
                <Link to="/note" className={`nav-link note ${activeLink === 'note' ? 'active' : ''}`} onClick={() => setActiveLink('note')}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path fill="#f28b82" d="M3 17.97V21h3l11-11H7.97L3 17.97zM20.71 7.89c.39-.39.39-1.02 0-1.41l-1.42-1.42c-.39-.39-1.02-.39-1.41 0l-1.42 1.42l2.83 2.83l1.42-1.42z"/>
                </svg>
                Notes
            </Link>
            <Link to="/" className="nav-link label">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path fill="#7bc67b" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zM9 17l-4-4l1.41-1.41L9 14.17l6.59-6.59L17 8l-8 8z"/>
                </svg>
                Create/Edit label
            </Link>
            <Link to="/" className="nav-link archive">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path fill="#aecbfa" d="M21 5v2H5V5h16zm-2 4H7v10h12V9zm-1 7H8v-1h10v1z"/>
                </svg>
                Archive
            </Link>
            <Link to="/" className="nav-link trash">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path fill="#fbbc04" d="M7 4V2H5v2H2v2h1v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8h1V6h-3V4H7zM9 4h6v2H9V4zm7 16H8v-1h8v1zm3-4H6V8h14v8zm-5-5h-2v3H8l4 4l4-4h-3V9z"/>
                </svg>
                Trash
            </Link>
        </div> 
    )
}