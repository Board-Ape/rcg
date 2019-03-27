import React from 'react';

const person = (props) => {
    return props.person.map(person => {
        return (
            <div>
                <p onClick={props.click}>{person.name} and {person.age}</p>
            </div>
        )
    })
};

export default person;