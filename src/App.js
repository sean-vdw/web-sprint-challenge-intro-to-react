import React, { useState, useEffect } from 'react';
import Character from './components/Character';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 3.5rem;
  color: ${props => props.theme.title};
  margin-top: 1%;
  font-weight: 200;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [chars, setChars] = useState([]);

  useEffect(() => {
    const fetchChars = () => {
      axios.get('https://swapi.dev/api/people')
        .then(res => {
          setChars(res.data);
        })
        .catch(err => {
          console.error(err);
        })
    }
    fetchChars()
  }, []);

  return (
    <div className="App">
      <Title>Star Wars Characters</Title>
      {
        chars.map((char, index) => {
          return <Character key={index} info={char} ></Character>
        })
      }
    </div>
  );
}

export default App;
