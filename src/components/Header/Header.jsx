import React from 'react'
import Navbar from './Navbar/Navbar'
import CompHead from './CompHead/CompHead'
import './Header.css'

const Header = () => {

    return (
        <header>
            <CompHead />
            <Navbar />
        </header>
    )
}

export default Header