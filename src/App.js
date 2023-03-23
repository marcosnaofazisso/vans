import './App.css'
import ProductView from './components/ProductView';
import Header from './components/Header';
import Description from './components/Description';
import { Row } from './styles';

function App() {
  return (
    <>
      <Header />
      <Row>
        <Description />
        <ProductView />
      </Row>
    </>
  );
}

export default App;
