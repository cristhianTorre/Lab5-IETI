import React from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

export default function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login></Login>} />
                    <Route path="/home" element={<Home></Home>} />
                </Routes>
            </BrowserRouter>
        </div>

    );
}