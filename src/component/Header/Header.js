

import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div>

                <h2>Home </h2>
            </div>
            <div className='link'>
                <a href="/courses">Courses</a>
                <a href="/Registration">Registration</a>
                <a href="/Loi-In">Log-In</a>
                <a href="/About">About</a>
            </div>
        </div>
    );
};

export default Header;