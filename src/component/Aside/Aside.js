
import logo from '../../images/my.webp'
import React from 'react';
import './Aside.css'

const Aside = () => {
    return (
        <div className='my-info'>
            <img src={logo} alt="" />
            <div className='detail'>
                <h4>Rabiul Islam Siyam</h4>
                <p>Tangail,Bangladesh</p>
            </div>
        </div>
    );
};

export default Aside;