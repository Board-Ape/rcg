import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="person">
            <h1>{props.name}</h1>
            <p>{props.age}</p>
            <input 
                placeholder="Enter Name Change"
                onChange={(event) => props.nameChangeHandler(event, props.id)}
            />
        </div>
    )
};

export default person;