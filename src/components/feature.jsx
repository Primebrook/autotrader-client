import { Form } from 'react-bootstrap';


const Feature = (props) => {

    const allConfigs = {
        'ManufacturedYear': {
            'controlId': 'formManufacturedYear',
            'label': 'Manufactured Year',
            'inputType': 'number',
            'placeholder': 'e.g. 2008',
            'validation': { 
                required: {value: true, message: "Input required."},
                pattern: {value:/^[0-9]+$/, message: "Manufactured Year must be a valid year e.g. 2008."} }
        },
        'Mileage': {
            'controlId': 'formMileage',
            'label': 'Mileage',
            'inputType': 'number',
            'placeholder': 'e.g. 5000',
            'validation': {
                required: {value: true, message: "Input required."},
                pattern: {value:/^[0-9]+$/, message: "Mileage must be a valid an integer e.g. 5000."} 
            }
        },
        'EngineSize': {
            'controlId': 'formEngineSize',
            'label': 'Engine Size',
            'inputType': 'number',
            'placeholder': 'e.g. 10',
            'validation': {
                required: {value: true, message: "Input required."},
                pattern: {value:/^[0-9]+$/, message: "Engine Size must be a valid an integer e.g. 50"} 
            }
        },
        'TopSpeed': {
            'controlId': 'formTopSpeed',
            'label': 'Top Speed',
            'inputType': 'number',
            'placeholder': 'e.g. 120',
            'validation': {
                required: {value: true, message: "Input required."},
                pattern: {value:/^[0-9]+$/, message: "Top Speed must be a valid an integer e.g. 50"} 
            }
        },
        'EnginePower': {
            'controlId': 'formEnginePower',
            'label': 'Engine Power',
            'inputType': 'number',
            'placeholder': 'e.g. 5',
            'validation': {
                required: {value: true, message: "Input required."},
                pattern: {value:/^[0-9]+$/, message: "Engine Power must be a valid an integer e.g. 50"} 
            }
        },
        'EngineTorque': {
            'controlId': 'formEngineTorque',
            'label': 'Engine Torque',
            'inputType': 'number',
            'placeholder': 'e.g. 5',
            'validation': {
                required: {value: true, message: "Input required."},
                pattern: {value:/^[0-9]+$/, message: "Engine Torque must be a valid an integer e.g. 50"} 
            }
        },
        'Height': {
            'controlId': 'formHeight',
            'label': 'Height',
            'inputType': 'number',
            'placeholder': 'e.g. 2008',
            'validation': { 
                required: {value: true, message: "Input required."},
                pattern: {value:/^[0-9]+$/, message: "Height must be a valid integer e.g. 5."} }
        },
        'Length': {
            'controlId': 'formLength',
            'label': 'Length',
            'inputType': 'number',
            'placeholder': 'e.g. 5',
            'validation': {
                required: {value: true, message: "Input required."},
                pattern: {value:/^[0-9]+$/, message: "Length must be a valid an integer e.g. 50"} 
            }
        },
        'Wheelbase': {
            'controlId': 'formWheelbase',
            'label': 'Wheelbase',
            'inputType': 'number',
            'placeholder': 'e.g. 5',
            'validation': {
                required: {value: true, message: "Input required."},
                pattern: {value:/^[0-9]+$/, message: "Wheelbase must be a valid an integer e.g. 50"} 
            }
        },
        'Width': {
            'controlId': 'formWidth',
            'label': 'Width',
            'inputType': 'number',
            'placeholder': 'e.g. 5',
            'validation': {
                required: {value: true, message: "Input required."},
                pattern: {value:/^[0-9]+$/, message: "Width must be a valid an integer e.g. 50"} 
            }
        },
        'FuelTankCapacity': {
            'controlId': 'formFuelTankCapacity',
            'label': 'Fuel Tank Capacity',
            'inputType': 'number',
            'placeholder': 'e.g. 5',
            'validation': {
                required: {value: true, message: "Input required."},
                pattern: {value:/^[0-9]+$/, message: "Fuel Tank Capacity must be a valid an integer e.g. 50"} 
            }
        },
        'BootSpaceSeatsUp': {
            'controlId': 'formBootSpaceSeatsUp',
            'label': 'Boot Space Seats Up',
            'inputType': 'number',
            'placeholder': 'e.g. 5',
            'validation': {
                required: {value: true, message: "Input required."},
                pattern: {value:/^[0-9]+$/, message: "Boot Space Seats Up must be a valid an integer e.g. 50"} 
            }
        },
        'Urban': {
            'controlId': 'formUrban',
            'label': 'Urban',
            'inputType': 'number',
            'placeholder': 'e.g. 5',
            'validation': {
                required: {value: true, message: "Input required."},
                pattern: {value:/^[0-9]+$/, message: "Urban must be a valid an integer e.g. 50"} 
            }
        },
        'ExtraUrban': {
            'controlId': 'formExtraUrban',
            'label': 'Extra Urban',
            'inputType': 'number',
            'placeholder': 'e.g. 5',
            'validation': {
                required: {value: true, message: "Input required."},
                pattern: {value:/^[0-9]+$/, message: "Extra Urban must be a valid an integer e.g. 50"} 
            }
        },
        'Co2Emissions': {
            'controlId': 'formCo2Emissions',
            'label': 'Co2 Emissions',
            'inputType': 'number',
            'placeholder': 'e.g. 5',
            'validation': {
                required: {value: true, message: "Input required."},
                pattern: {value:/^[0-9]+$/, message: "Co2 Emssions must be a valid an integer e.g. 50"} 
            }
        }
    }

    const config = allConfigs[props.featureName]

    return (
        <Form.Group controlId={config.controlId}>
            <Form.Label>{config.label}</Form.Label>
            <Form.Control type={config.inputType} placeholder={config.placeholder}
            {...props.reg(config.controlId, config.validation) }
        />
        </Form.Group>
    );
}
 
export default Feature;