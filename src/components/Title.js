import React from 'react';
import styled from 'styled-components';


const TitleDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5%;
`;

const H2 = styled.h2`
    color: #C9A978;
`;



const Title = props => {
    return (
        <TitleDiv>
            <H2>{props.title}</H2>
        </TitleDiv>
    );
};

export default Title;
