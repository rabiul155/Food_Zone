
import logo from '../../images/my.webp'
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Aside.css'
import addToLocalStorage from '../../utilities/addToLocalStorage';

const Aside = (props) => {
    const { time } = props;
    let totalTime = 0;
    for (const i of time) {
        totalTime = totalTime + i;
    }

    const [breakTime, setBreakTime] = useState(0)
    useEffect(() => {
        const getTimeLS = localStorage.getItem('break-time');
        if (getTimeLS) {
            const timeInt = JSON.parse(getTimeLS);
            setBreakTime(timeInt);
        }

    }, [])


    const setTime = (time) => {

        setBreakTime(time);

        addToLocalStorage(time);

    }




    const notify = () => toast("Successfully completed");



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
                    <button onClick={() => setTime(10)} className='btn'>10s</button>
                    <button onClick={() => setTime(20)} className='btn'>20s</button>
                    <button onClick={() => setTime(30)} className='btn'>30s</button>
                    <button onClick={() => setTime(40)} className='btn'>40s</button>
                </div>
            </div>


            <div>
                <h3>Order details</h3>

                <div className='total-time'>
                    <p>Total time</p>
                    <span>{totalTime}min</span>
                </div>
                <div className='total-time'>
                    <p>Brek time</p>
                    <span>{breakTime}sec</span>
                </div>
            </div>

            <div>
                <button onClick={notify} className='activity-btn'>Activity Completed</button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Aside;

