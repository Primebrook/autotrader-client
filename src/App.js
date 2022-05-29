import React, { useState } from "react";
import Features from './components/featureForm'
import NavigationBar from './components/navBar'
import Prediction from './components/prediction'
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [isPending, setIsPending] = useState(false); // monitors when the predict button is pressed
  const [predictionPayload, setPredictionPayload] = useState(null);

  function formatKeyForPython (key) {
    const result1 = key.replace(/([A-Z])/g, " $1" ); // adds 1 whitespace to the left of any capital letter.
    const result2 = result1.slice(5) // slices of the first 5 characters this is 'form' plus 1 whitespace.
    const result3 = result2.toLowerCase();
    const result4 = result3.replace(/ /g, '_') // replaces any whitespace with an underscore
    return result4
  }

  function formatObjectForBackend (object) {
    const newObject = {}
    const oldKeys = Object.keys(object)
    oldKeys.forEach(key => newObject[formatKeyForPython(key)] = object[key])
    return newObject
  }

  const onSubmit = (formData, event) => {

    const formattedFormData = formatObjectForBackend(formData)   
    setIsPending(true); // if the predict button is pressed with a valid submission then we set isPending to True
    fetch('http://localhost:5000', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(formattedFormData)})
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setIsPending(false);
      setPredictionPayload(data);
    })
    
  };

  return (
    <div className="App">
      <NavigationBar/>
      <header className="App-header bg-transparent text-black">
        <Container className="sm">
          <Features 
            onSubmit={onSubmit} 
            predictButton=
                  {
                  !isPending ? <Button size="lg" variant="primary" type="submit">Predict</Button> : <Button disabled size="lg" variant="primary" type="submit">Predict</Button>
                  }
            />
        </Container>
        {predictionPayload && <Container className="justify-content-md-center mb-4 mt-4"><Prediction predictionPayload={predictionPayload}/></Container>}
      </header>
    </div>
  );
}

export default App;
