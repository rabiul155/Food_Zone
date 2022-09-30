
import logo from '../../images/my.webp'
import React from 'react';
import './Aside.css'

const Aside = () => {
    return (
        <div className='container'>
            <div className='my-info'>
                <img src={logo} alt="" />
                <div className='detail'>
                    <h4>Rabiul Islam Siyam</h4>
                    <p>Tangail,Bangladesh</p>
                </div>
            </div>
            <div className='my-biodata'>
                <div >
                    <h3 className='biodata'>67<small>kg</small></h3>
                    <p className='biodata'>weight</p>
                </div>
                <div>
                    <h3 className='biodata'>5.7<small>ft</small></h3>
                    <p className='biodata'>height</p>
                </div>
                <div>
                    <h3 className='biodata'>24<small>yrs</small></h3>
                    <p className='biodata'>Age</p>
                </div>
            </div>

            <div>
                <h3>Add a break</h3>
                <div className='add-break'>
                    <button className='btn'>10s</button>
                    <button className='btn'>20s</button>
                    <button className='btn'>30s</button>
                    <button className='btn'>40s</button>
                </div>
            </div>


            <div>
                <h3>Order details</h3>

                <div className='total-time'>
                    <p>Total time</p>
                    <span>min</span>
                </div>
                <div className='total-time'>
                    <p>Brek time</p>
                    <span>sec</span>
                </div>
            </div>

            <div>
                <button className='activity-btn'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Aside;