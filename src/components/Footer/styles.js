import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f92020;
    height: 50vh;
    
    @media (max-width: 800px) {
        height: 40vh;
  }

`;
export const TextContainer = styled.div`
    display: flex;

`;
export const CreditsContainer = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: center; 
    margin-top: 4rem;
    
    @media (max-width: 800px) {
      margin-top: 1.5rem;
      padding: 2rem;
  }

`;

export const Title = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@200;700&display=swap');
  font-family: "Unbounded", cursive;
  color: #FFF;
  font-size: 84px;
  margin: 0;

  @media (max-width: 800px) {
        font-size: 22px;
        padding: 2px;

  }
  `;

export const SubTitle = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@200;700&display=swap');
  font-family: "Unbounded", cursive;
  color: #FFF;
  font-size: 84px;
  margin: 0;

  @media (max-width: 800px) {
    font-size: 22px;
    padding: 2px;
  
  }
  `;
export const SubTitleAddress = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@200;700&display=swap');
  font-family: "Unbounded", cursive;
  color: #FFF;
  font-size: 14px;
  margin-left: 2rem;
  margin-top: 1rem;
  
  @media (max-width: 800px) {
    font-size: 10px;
    margin-left: 1rem;
  }
`;