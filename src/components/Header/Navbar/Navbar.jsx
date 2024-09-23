import React from 'react'
import CartWidget from './CartWidget'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="#">Catalogo</a>
                </li>
                <li>
                    <a href="#">Nosotros</a>
                </li>
                <li>
                    <a href="#">Contacto</a>
                </li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default Navbar