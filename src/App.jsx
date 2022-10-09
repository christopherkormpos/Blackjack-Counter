import Navbar from './components/Navbar'
import Main from './components/Main'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import InfoPage from './pages/InfoPage'

export default function App() {
    return <div>
        <Navbar />
        <Router>
            <Routes>
                <Route
                    exact
                    path='/'
                    element={
                        <Main />
                    }>
                </Route>
                <Route path='/info' element={<InfoPage />} />
            </Routes>
        </Router>
    </div>
}