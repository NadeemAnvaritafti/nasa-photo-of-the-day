import React from 'react';
import styled from 'styled-components';

const ImgDiv = styled.div`
    display: flex;
    justify-content: center;
    object-fit: scale;

`;

const APODimg = styled.img`
    border-radius: 15px;
    width: 50%;
    height: 50%;

`;

const Img = props => {
    return (
        <ImgDiv>
            <APODimg src={props.src} alt='APOD'/>
        </ImgDiv>
    );
};

export default Img;