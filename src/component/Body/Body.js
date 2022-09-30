
import React, { useEffect, useState } from 'react';
import Aside from '../Aside/Aside';
import Display from '../Display/Display';
import './Body.css'

const Body = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    console.log(items);

    return (
        <div className='body-container'>

            <div>
                <div className='food-header'>

                    <h3>Select Your Food</h3>
                </div>
                <div className='body-items'>
                    {
                        items.map(item => <Display
                            key={item.id}
                            item={item}

                        ></Display>)
                    }
                </div>

            </div>
            <div className='aside-items'>
                <Aside></Aside>
            </div>

        </div>
    );
};

export default Body;