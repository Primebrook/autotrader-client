import { Row, Col, Form, Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Feature from './feature'

const Features = ({ onSubmit, predictButton }) => {

    const rowClass = 'justify-content-md-center mb-2 mt-2'
    const { register, handleSubmit, formState } = useForm();

    return (
        <div>
        <h1>Get A Price Prediction</h1>

        {
        (!formState.isValid && formState.isSubmitted) ? 
        <Alert variant="danger"> {Object.values(formState.errors).map( (e, idx) => {return (<p key={idx}>{e.message}</p>);} )} </Alert> 
        : <Alert variant="success">Please fill in the form</Alert>
        }

        <Form onSubmit={handleSubmit(onSubmit)}>

            <Row className={rowClass}>
                <Col md>
                    <Feature featureName="ManufacturedYear" reg={register}/>
                </Col>
                <Col>
                    <Feature featureName="Mileage" reg={register}/>
                </Col>
            </Row>

            <Row className={rowClass}>
                <Col md>
                    <Feature featureName="EngineSize" reg={register}/>
                </Col>
                <Col>
                    <Feature featureName="TopSpeed" reg={register}/>
                </Col>
            </Row>

            <Row className={rowClass}>
                <Col md>
                    <Feature featureName="EnginePower" reg={register}/>
                </Col>
                <Col>
                    <Feature featureName="EngineTorque" reg={register}/>
                </Col>
            </Row>

            <Row className={rowClass}>
                <Col md>
                    <Feature featureName="Length" reg={register}/>
                </Col>
                <Col>
                    <Feature featureName="Wheelbase" reg={register}/>
                </Col>
            </Row>

            <Row className={rowClass}>
                <Col md>
                    <Feature featureName="Width" reg={register}/>
                </Col>
                <Col>
                    <Feature featureName="FuelTankCapacity" reg={register}/>
                </Col>
            </Row>

            <Row className={rowClass}>
                <Col md>
                    <Feature featureName="BootSpaceSeatsUp" reg={register}/>
                </Col>
                <Col>
                    <Feature featureName="Urban" reg={register}/>
                </Col>
            </Row>

            <Row className={rowClass}>
                <Col md>
                    <Feature featureName="ExtraUrban" reg={register}/>
                </Col>
                <Col>
                    <Feature featureName="Co2Emissions" reg={register}/>
                </Col>
            </Row>

            <Row className={rowClass}>
                <Col md>
                    <Feature featureName="Height" reg={register}/>
                </Col>
                <Col>
                {/* empty column */}
                </Col>
            </Row>


            <div className="text-center mt-4 mb-4">
                {predictButton}
            </div>
        </Form>
        </div>
    );
}
 
export default Features;