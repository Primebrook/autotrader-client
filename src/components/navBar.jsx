import { Navbar, Container } from 'react-bootstrap'

const NavigationBar = () => {
    return (
        <Navbar className="mb-5" bg="primary" variant="dark" expand="lg" sticky="top">
            <Container>
            <Navbar.Brand className="text-light" href="about">ABOUT</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Brand className="text-light" href="https://github.com/ezeahunanya/autotrader" target="_blank">CODE</Navbar.Brand>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
 
export default NavigationBar;