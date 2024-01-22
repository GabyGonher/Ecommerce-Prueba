import { Container, Form, Nav, Navbar } from 'react-bootstrap'
import './stylesNav.css';

export function BarraNavbar() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid className='contenedorNav'>
        <Navbar.Brand href="/">
          <img
            // src="/src/Components/Navbar/logoChedraui.png"
            src="/assets/logoChedraui.png"
            alt="Logo"
            height="45"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className='nav' />
        <Container>

          <Form className="d-flex buscador">
            <Form.Control
              type="search"
              placeholder="¿Qué estas buscando?"
              className="me-2"
              aria-label="¿Qué estas buscando?"
            />
          </Form>

        </Container>

        <Container className='optionsBar'>

          <Nav.Link className="ml-auto" href="#action1">Mi Cuenta</Nav.Link>
          <Nav.Link className="ml-auto" href="#action2">Agregar Dirección </Nav.Link>

        </Container>
      </Container>
    </Navbar>
  );
}
