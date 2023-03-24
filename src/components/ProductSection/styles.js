import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
    background-color: #000;
    
    @media (max-width: 1200px) {
        flex-direction: row-reverse;
        flex-wrap: wrap;

  }


`;

export const SectionDescription = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 2rem;
    width: 50vw;
`;
export const TitleDescription = styled.h2`
    @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@200;700&display=swap');
    font-family: "Unbounded", cursive;
    color: #FFF;
    font-size: 60px;
    margin: 0;
`;
export const SubTitleDescription = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@200;700&display=swap');
    font-family: "Unbounded", cursive;
    color: #FFF;
    font-size: 60px;
    margin: 0;
`;