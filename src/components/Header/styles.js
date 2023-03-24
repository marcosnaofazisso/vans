import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2.5rem;
    @media (max-width: 800px) {
        padding: 1rem;
    }
`;

export const Logo = styled.img`
    width: 10vw;
    height: 10vh;
    
    @media (max-width: 800px) {
        width: 15vw;
        height: auto;
        padding: 0;
  }
    `;


export const ContainerIcons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    width: 60vw;
    
    @media (max-width: 800px) {
        justify-content: center;

  }
    `;

export const Icons = styled.div`
    color: #000;
    margin: 0 .5rem 0 2rem;
    
    &:hover {
        color: #F00;
        cursor: pointer;
    }
    
    @media (max-width: 800px) {
        margin: 0 .2rem 0 1rem;
        font-size: .5rem;
        

  }
`;

export const Option = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@200;700&display=swap');
  font-family: "Unbounded", cursive;
  color: #000;
  font-size: 2rem;
  font-weight: bold;
  margin: 0 2rem;
  
  &:hover {
      color: #F00;
      cursor: pointer;
    }
    
    @media (max-width: 800px) {
        font-size: .5rem;
        margin: 0 .5rem;
        

  }
  `;
