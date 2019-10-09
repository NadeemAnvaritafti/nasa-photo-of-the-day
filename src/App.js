import React, {useState, useEffect} from "react";
import axios from 'axios';
import Body from './components/Body';
import Img from './components/IMG';
import Title from './components/Title';
import logo from './img/astro.jpg';

import "./App.css";

function App() {

  const [apod, setAPOD] = useState([]);

  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
      console.log(response);
      console.log(response.data);
      setAPOD(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }, []);


  return (
    <div className="App">
      <div>
        <img src={logo} />
      </div>
      <Title title={apod.title} /> 
      <Img src={apod.hdurl} /> 
      <Body date={apod.date} exp={apod.explanation} /> 
    </div>
  );
}

export default App;
