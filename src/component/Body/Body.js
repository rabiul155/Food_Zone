
import React, { useEffect, useState } from 'react';
import Aside from '../Aside/Aside';
import Display from '../Display/Display';
import Question from '../Question/Question';
import './Body.css'

const Body = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])



    const [Time, setTime] = useState([])
    const btnClicked = (time) => {

        const newTime = [...Time, time]
        setTime(newTime);

    }

        ;

    return (
        <div>
            <div className='body-container'>
                <div>
                    <div className='food-header'>

                        <h3>Select Your Food</h3>
                    </div>
                    <div className='body-items'>
                        {
                            items.map(item => <Display
                                btnClicked={btnClicked}
                                key={item.id}
                                item={item}

                            ></Display>)
                        }
                    </div>

                </div>
                <div className='aside-items'>
                    <Aside
                        time={Time}></Aside>
                </div>
            </div>
            <Question></Question>

        </div>
    );
};

export default Body;