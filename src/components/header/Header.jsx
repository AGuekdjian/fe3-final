import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/57978.jpg'
import Navbar from '../navbar/Navbar'
import './Header.css'

export default function Header() {
    return (
        <header className='header'>
            <Link>
                <img src={logo} alt="Logo" className='logo' />
            </Link>
            <Navbar />
        </header>
    )
}
