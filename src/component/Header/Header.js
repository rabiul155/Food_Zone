
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div>
                <h2><FontAwesomeIcon icon={faCoffee} /> Food_Zone</h2>
               
            </div>
            <div className='link'>
                <a href="/Discount">Discount</a>
                <a href="/Item">Ieam</a>
                <a href="/Popular">Popular</a>

            </div>
        </div>
    );
};

export default Header;