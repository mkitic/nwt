import React from 'react';
import styled from 'styled-components';
//import Radium from 'radium';

import './Person.css';

const person = (props) => {
    //return <p> I'm person and I am  { Math.floor(Math.random()*30) } years </p>
   const style ={
       '@media (min-width: 500px )': {
           width: '450px'
       }
   };
    return (
        //<div className='Person' style={style}> 
        style.div``
            <p onClick={props.click}>i'm {props.name} and I'm {props.age} years </p>
            <p> {props.children} </p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
    
};

//export default Radium(person);
export default person;