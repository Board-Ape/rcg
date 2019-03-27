import React from 'react';

const person = (props) => {
    return props.person.map((person, key) => {
        return (
            <div key={key}>
                <p onClick={props.click.bind(this, key)}>{person.name} and {person.age}</p>
                <input type="text" onChange={props.changed} key={key}/>
            </div>
        )
    })
};

export default person;