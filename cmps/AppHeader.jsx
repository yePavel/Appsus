const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {

    return <header className="app-header">
        <Link to="/">
            <h3>LOGO!</h3>
        </Link>
        <nav>
            <NavLink to="/"><img className='main-icon' src="./assets/img/mail-icons/home.png" alt="home-icon" /></NavLink>
            <NavLink to="/mail"><img className='main-icon'
                src="./assets/img/mail-icons/gmail-icon.png"
                alt="gmail-icon" />
            </NavLink>
            <NavLink to="/note"><img src="https://img.icons8.com/?size=100&id=30655&format=png&color=000000"
                alt="Google Keep Logo"
                className="keep-icon" />
            </NavLink>
        </nav>
    </header>
}
