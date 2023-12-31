import React from 'react'

import { FaMaxcdn } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Logo = ({ toggleMenu }) => {
    return (
        <h1 className='header__logo'>
            <Link to='/'>
                <em onClick={toggleMenu}>
                    <FaMaxcdn />
                </em>
                <span><i>MOLABOGI</i> YouTube</span>
            </Link>
        </h1>
    )
}

export default Logo