import Container from 'react-bootstrap/esm/Container';
import './App.css';
import PokeFooter from './components/generalComponents/PokeFooter';
import PokeHeader from './components/generalComponents/PokeHeader';

function App() {
  return (
    <div className="App">
      <PokeHeader />
      <Container className='appContainer'>
      Hello World from react app
      </Container>
      <PokeFooter />
    </div>
  );
}

export default App;
