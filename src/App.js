import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Entartainment from './components/Entartainment'
import Educational from './components/Educational'
import Home from './components/Home'
import Navbar from './components/Navbar'
import AddItems from './components/AddItems'
import Edit from './components/Edit'


const App = () => {
    return (
        <div>
            <Router>
            <Navbar/>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/education' element={<Educational />} />
                    <Route path='/entertain' element={<Entartainment />} />
                    <Route path='/create' element={<AddItems/>} />
                    <Route path='/update' element={<Edit/>} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
