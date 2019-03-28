import React from 'react';
import './Person.css';

const person = (props) => {
    return props.person.map((person, key) => {
        return (
            <div className="person" key={key}>
                <p onClick={props.click.bind(this, key)}>{person.name} and {person.age}</p>
                <input type="text" onChange={props.changed} key={key}/>
            </div>
        )
    })
};

export default person;