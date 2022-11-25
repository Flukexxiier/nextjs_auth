import Login from './login'
import Success from './success'
import styles from '/styles/dev.module.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function Index() {

    return (
        <Router>
            <Routes>
                <Route path='../account' element={<Login/>} /> 
                <Route path='./success' element={<Success/>} />
            </Routes>
        </Router>
    )
}