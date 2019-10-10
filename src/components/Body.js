import React from 'react';
import styled from 'styled-components';

const DateDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h4 {
        font-style: italic;
        color: #C9A978;
    };
    p {
        font-size: 1.4 rem;
        text-align: center;
    }
`;

const Body = props => {
    return (
        <DateDiv>
            <h4>{props.date}</h4>
            <p>{props.exp}</p>
        </DateDiv>
    );
};

export default Body;