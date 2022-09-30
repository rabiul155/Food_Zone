
import React from 'react';
import './Display.css';

const Display = (props) => {
    const { id, picture, time, price, name } = props.item;

    return (
        <div className='food-card'>
            <img src={picture} alt="" />
            <div className='food-info'>
                <p className='food-name'>{name}</p>
                <p>Delivery in : {time}min</p>
                <p>Price : {price}</p>
            </div>
            <button className='button-cart'>Order Now</button>

        </div>
    );
};

export default Display;