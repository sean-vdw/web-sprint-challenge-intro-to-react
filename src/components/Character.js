// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledChar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CharContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: 1% 3%;
  padding: 2% 1%;
  border-radius: 10px;
  -webkit-box-shadow: -7px 7px 10px 5px rgba(196,0,0,0.69); 
  box-shadow: -7px 7px 10px 5px rgba(196,0,0,0.69);
  background-color: ${props => props.theme.charBg};
  color: ${props => props.theme.nameText};
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    -webkit-box-shadow: none; 
    box-shadow: none;
    background-color: ${props => props.theme.charBgHov};
  }
`

export default function Character ({ info }) {

  return (
    <StyledChar>
      <CharContainer>
        {info.name} 
      </CharContainer>
    </StyledChar>
  )
}