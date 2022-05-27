// import './App.css';
import Features from './components/featureForm'
import NavigationBar from './components/navBar'
import { Container, Button, Alert, Breadcrumb, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

      <NavigationBar/>
      

      <header className="App-header bg-transparent text-black">
        
        <Container className="sm">
          <Features/>
{/* 
          <Card className="mb-3" style={{ color: "#000", marginBottom: 15 }}> 
            <Card.Img src="https://picsum.photos/200/50"/>
            <Card.Body>
              <Card.Title>
                Card Example
              </Card.Title>
              <Card.Text>
                This is an example of react bootstrap cards
              </Card.Text>
            </Card.Body>
          </Card>

          <Breadcrumb>
            <Breadcrumb.Item>Test 1</Breadcrumb.Item>
            <Breadcrumb.Item>Test 2</Breadcrumb.Item>
            <Breadcrumb.Item active >Test 3</Breadcrumb.Item>
          </Breadcrumb>

          <Alert variant="success">This is a button</Alert>
          <Button>Test Button</Button> */}

        </Container>

      </header>
    </div>
  );
}

export default App;
