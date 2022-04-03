import styled from 'styled-components';

export const PadContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    color: white;
    background-color: ${({ padsIsOn, color }) => (padsIsOn ? color: "#131A22")};
    height:22vh;
    width:100%;
    border-radius:5px;
    color: #fff;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
    box-shadow: 0 0 5px  ${({ color }) => (color ? color: "lightgreen")};

    &:hover {
        background-color: ${({ color }) => (color ? color: "lightgreen")};
        color: #fff;
        transform: translateY(-7px);
        box-shadow: 0 0 10px ${({ color }) => (color ? color : "lightgreen")}, 0 0 20px ${({ color }) => (color ? color : "lightgreen")}, 0 0 20px #fff inset;
      }
`