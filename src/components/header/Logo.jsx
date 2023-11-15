import React from 'react'

import { AiFillYoutube } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <h1 className='header__logo'>
            <Link to='/'>
                <em>
                    <AiFillYoutube />
                </em>
                <span><i>Molabogi</i> YouTube</span>
            </Link>
        </h1>
    )
}

export default Logo