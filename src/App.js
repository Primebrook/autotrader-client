// import './App.css';
import Features from './components/featureForm'
import NavigationBar from './components/navBar'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <header className="App-header bg-transparent text-black">
        <Container className="sm">
          <Features/>
        </Container>
      </header>
    </div>
  );
}

export default App;
