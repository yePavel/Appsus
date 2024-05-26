import { NoteSearch } from './NoteSearch.jsx'

export function NoteHeader() {
    return <header className="header">
        <h1 className="header-title">
            Miss keep
            <span className="keep-icon">
                <img src="https://img.icons8.com/?size=100&id=30655&format=png&color=000000" alt="Google Keep Icon" />
            </span>
        </h1>
 
        <NoteSearch />

        {/* Sidebar menu will be added here in the future */}
        {/* <SidebarMenu /> */}
    </header>
}