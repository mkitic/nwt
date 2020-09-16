import React from 'react';

import './Person.css';

const person = (props) => {
    //return <p> I'm person and I am  { Math.floor(Math.random()*30) } years </p>
    return (
        <div className='Person'> 
            <p onClick={props.click}>i'm {props.name} and I'm {props.age} years </p>
            <p> {props.children} </p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
    
};

export default person;