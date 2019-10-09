import React from 'react';

const Body = props => {
    return (
        <div>
            <h3>Date: {props.date}</h3>
            <p>Explanation: {props.exp}</p>
        </div>
    );
};

export default Body;