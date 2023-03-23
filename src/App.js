import './App.css'
import ProductView from './components/ProductView';
import Header from './components/Header';
import Description from './components/Description';
import { Row } from './styles';

import ProductSection from './components/ProductSection';
import { Container, SectionDescription, TitleDescription, SubTitleDescription } from './components/ProductSection/styles';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header />
      <Row>
        <Description />
        <ProductView />
      </Row>
      <Container>
        <ProductSection />
        <SectionDescription>
          <SubTitleDescription>``</SubTitleDescription>
          <TitleDescription>For you</TitleDescription>
          <SubTitleDescription>Off the Wall</SubTitleDescription>
          <SubTitleDescription>````</SubTitleDescription>
        </SectionDescription>
      </Container>
      <Footer />

    </>
  );
}

export default App;
