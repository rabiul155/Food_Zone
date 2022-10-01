
import React from 'react';

const addToLocalStorage = (time) => {

    let brekTime;

    const storedTime = localStorage.getItem('break-time')

    if (storedTime) {
        brekTime = JSON.parse(storedTime);
        brekTime = time;
        localStorage.setItem('break-time', JSON.stringify(brekTime));

    }
    else {
        localStorage.setItem('break-time', JSON.stringify(time));
    }

};

export default addToLocalStorage;
