

import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question-container'>
            <h1>3 random question about react js</h1>
            <div className='question'>
                <h2>How does react work</h2>
                <p> ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code</p>
            </div>
            <div className='question'>
                <h2>Diffence between props and state</h2>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component</p>
            </div>
            <div className='question'>
                <h2>What are the uses of use effect</h2>
                <p>The useEffect Hook allows you to perform side effects in your components.Some examples of side effects are: fetching data, directly updating the DOM, and timers.useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.</p>
            </div>

        </div>
    );
};

export default Question;