import React, {Component} from 'react';
import Card from '../Card/Card';

const cardContainer = (props) => {
    console.log(props)
    return (
        <div>
            <Card />
        </div>
    );
}

export default cardContainer;