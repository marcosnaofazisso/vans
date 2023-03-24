import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #FFF;
    height: 50vh;
    
    @media (max-width: 800px) {
        height: 25vh;

  }
`;

export const BuyButton = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@200;700&display=swap');
    font-family: "Unbounded", cursive;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    border: 5px solid #000;
    padding: 3rem;
    color: #000;
    
    &:hover {
        color: #F00;
        cursor: pointer;
        border: 5px solid #F00;
    }
    
    @media (max-width: 800px) {
        font-size: 30px;
        padding: 1rem;

  }
`;