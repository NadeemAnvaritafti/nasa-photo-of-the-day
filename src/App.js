import React, {useState, useEffect} from "react";
import axios from 'axios';
import Body from './components/Body';
import Img from './components/IMG';
import Title from './components/Title';
import logo from './img/astro.jpg';
import styled from 'styled-components';
import "./App.css";

const Container = styled.div`
  background: #251E24;
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 2%;
`;

const Heading = styled.div`
    display: flex;
    align-items: center;
    width: 100%;

    background: ${props => (props.gold ? "#C9A978" : "#251E24")};
    &:hover {
        background: ${props => (props.gold ? "#251E24" : "#C9A978")};
        h1 {
          color: ${props => (props.gold ? "white" : "#251E24" )};
        }
    }
`;


const LogoDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 10%;
    padding: 2%;
`;

const HeaderDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 82%;
    padding: 2%;
`;

const Logo = styled.img`
    border-radius: 20px;
    &:hover {
      opacity: 0.8;
    }
`;


function App() {

  const [apod, setAPOD] = useState([]);

  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
      console.log(response);
      setAPOD(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }, []);


  return (
    <Container>
      <Contents>
        <Heading>
          <LogoDiv>
            <Logo src={logo} />
          </LogoDiv>
          <HeaderDiv>
            <h1>NASA's Astronomy Photo of the Day</h1>
          </HeaderDiv>
        </Heading>
        <Title title={apod.title} /> 
        <Img src={apod.hdurl} /> 
        <Body date={apod.date} exp={apod.explanation} />
      </Contents> 
    </Container>
  );
}

export default App;
