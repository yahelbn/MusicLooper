import styled from 'styled-components';
import fontTimer from '../../font/digital-7/digital-7.ttf';

export const PaletteContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    margin:10px;
`

export const PadsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`

export const PalettePlayButton = styled.button`
  text-transform: capitalize;
  margin: 20px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: ${({ playAll }) => (playAll ? "#F5B7B1" : "#D5F5E3")};
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 13px;
  outline: none;
  cursor: pointer;
  font-weight: normal;
  transition: all 0.3s ease 0s;
  border: 0.2rem solid #fff;
  border-radius: 2rem;
  padding: 0.4em;
  box-shadow: 0 0 .2rem #fff,
  0 0 .2rem #fff,
  0 0 2rem ${({ playAll }) => (playAll ? "salmon" : "lightgreen")},
  0 0 0.8rem ${({ playAll }) => (playAll ? "salmon" : "lightgreen")},
  0 0 2.8rem ${({ playAll }) => (playAll ? "salmon" : "lightgreen")},
  inset 0 0 1.3rem ${({ playAll }) => (playAll ? "salmon" : "lightgreen")};

  &:hover {
    background-color: ${({ playAll }) => (playAll ? "salmon" : "lightgreen" )};
    box-shadow: 0px 15px 20px
      ${({ playAll }) => (playAll ? "salmon" : "lightgreen")};
    color: #fff;
    transform: translateY(-7px);
  }
  `;


 export const PaletteTimerContainer =styled.div`
  background-color: blue
  padding: 10px;
 `;


export const PaletteTimerLabel = styled.label`
@font-face {
    font-family: 'digital-7';
    font-style: normal;
    font-weight: 400;
    src: url(${fontTimer});
  }
  text-shadow: 
        0 0 5px tomato,
        0 0 10px tomato,
        0 0 20px tomato,
        0 0 40px tomato,
        0 0 80px tomato;
  font-family: 'digital-7', sans-serif;
  font-size:10vh;
  color:tomato;
`;

export const PaletteHeader =styled.h1`
  animation: flicker 1.5s infinite alternate;
  color: #fff;
  font-size: 3rem;    
  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
  margin:20px;
/* Flickering animation */
@keyframes flicker {
    
    0%, 18%, 22%, 25%, 53%, 57%, 100% {
  
        text-shadow:
        0 0 4px #fff,
        0 0 11px #fff,
        0 0 19px #fff,
        0 0 40px #0fa,
        0 0 80px #0fa,
        0 0 90px #0fa,
        0 0 100px #0fa,
        0 0 150px #0fa;
    
    }
    
    20%, 24%, 55% {        
        text-shadow: none;
    }    
  }
    `;