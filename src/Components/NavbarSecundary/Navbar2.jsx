import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './stylesNav2.css';
import selectoImg from './img/selecto.png';
import martiMiercoles from './img/miercoles.webp';
import landia from './img/chedrauilandia.webp';
import farmacia from './img/farmacia.webp';
import ofertas from './img/ofertas.webp';
import cuestaMenos from './img/cuestaMenos.webp';
export function NavMenu() {
  return (
    <>
      {/* // src\Components\Navbar\logoChedraui.png */}
      <Navbar className="bg-body-tertiary bodyNav">
        <Container className='containerImag' style={{ justifyContent: 'center' }}>
          <Navbar.Brand href="#home">
            <img
              // src="src/Components/Navbar2/img/selecto.png"
              src={selectoImg}
              width="20"
              height="20"
              className="d-inline-block align-top"
              alt="selecto"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            <img
              src={martiMiercoles}
              width="30rem"
              height="30rem"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            <img
              src={landia}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            <img
              src={farmacia}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            <img
              src={ofertas}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            <img
              src={cuestaMenos}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
        <Container className='containerMenu' style={{ justifyContent: 'end' }} >
          <Navbar.Brand href="#home">Folletos</Navbar.Brand>
          <Navbar.Brand href="#home">Recetas</Navbar.Brand>
          <Navbar.Brand href="#home">Ayuda</Navbar.Brand>
        </Container>
      </Navbar>

    </>
  );
}

