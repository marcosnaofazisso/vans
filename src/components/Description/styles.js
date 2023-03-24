import styled from "styled-components";

export const Container = styled.div`
    padding: 2.5rem;
    
    @media (max-width: 1200px) {
      padding: 1rem;

  }
    @media (max-width: 800px) {
      padding: .5rem;

  }
`;

export const Title = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@200;700&display=swap');
  font-family: "Unbounded", cursive;
  font-size: 84px;
  margin: 0;
  
  @media (max-width: 1200px) {
    font-size: 72px;

  }
  @media (max-width: 1000px) {
    font-size: 60px;

  }
  @media (max-width: 800px) {
    font-size: 40px;

  }
`;

export const SubTitle = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@200;700&display=swap');
  font-family: "Unbounded", cursive;
  font-size: 84px;
  margin: 0;

  @media (max-width: 1200px) {
    font-size: 72px;

  }
  @media (max-width: 1000px) {
    font-size: 60px;

  }
  @media (max-width: 800px) {
    font-size: 40px;

  }
`;
