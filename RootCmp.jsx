const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from "./cmps/AppHeader.jsx"
import { Home } from "./views/Home.jsx"
import { MailIndex } from "./apps/mail/views/MailIndex.jsx"
import { NoteIndex } from "./apps/note/views/NoteIndex.jsx"
// import { EmailDetails } from "./apps/mail/cmps/EmailDetails.jsx"
import { NoteAdd } from "./apps/note/cmps/NoteAdd.jsx"


export function App() {
    return <Router>
        <section className="app">
            <AppHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mail" element={<MailIndex />} />
                <Route path="/mail/:emailId" element={<MailIndex />} />
                <Route path="/note" element={<NoteIndex />} />
                <Route path="/note" element={<NoteAdd />} />
                <Route path="/note/:noteId/search" element={<NoteIndex />} />
                <Route path="/note/:noteId" element={<NoteIndex />} />
            </Routes>
        </section>
    </Router >
}
