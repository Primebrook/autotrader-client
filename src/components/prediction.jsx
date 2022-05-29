import { Alert } from 'react-bootstrap';

const Prediction = ({ predictionPayload }) => {
    return (
        <Alert className="bg-warning">
            <p className="text-center mt-4 mb-4">Prediction:</p>
            <h1 className="text-center mt-4 mb-4">{`£${predictionPayload.price_prediction.toString()}`}</h1>
        </Alert>
    );
}
 
export default Prediction;