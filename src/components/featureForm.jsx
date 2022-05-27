import { Row, Col, Button, Form, Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Features = () => {


    const { register, handleSubmit, formState } = useForm();
    const onSubmit = (data) => console.log(data);
    console.log(formState.errors)

    return (
        <div>
        <h1>Get A Price Prediction</h1>

        {
        (!formState.isValid && formState.isSubmitted) ? 
        <Alert variant="danger"> {Object.values(formState.errors).map( (e, idx) => {return (<p key={idx}>{e.message}</p>)} )} </Alert> : <Alert variant="success">Please fill in the form</Alert>
        }

        <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className="justify-content-md-center">
                <Col md>
                    <Form.Group controlId='formManufactureYear'>
                        <Form.Label>Manufacture Year</Form.Label>
                        <Form.Control type="text" placeholder="e.g. 2008" 
                        {...register("e.g. 2008", {required: {value: true, message: "say suin"}, pattern: {value:/^[0-9]+$/, message: "gotta be an integer"}})}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId='formMileage'>
                        <Form.Label>Mileage</Form.Label>
                        <Form.Control type="text" placeholder="e.g. 5000"
                        {...register("e.g. 5000", {required: {value: true, message: "say suin"}, pattern: {value:/^[0-9]+$/, message: "gotta be an integer"}})}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <div className="text-center mt-4 mb-4">
                <Button size="lg" variant="primary" type="submit">Predict</Button>
            </div>
        </Form>
        </div>
    );
}
 
export default Features;