import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './stylesNav2.css';
import selectoImg from './img/selecto.png';
import martiMiercoles from './img/miercoles.webp';
import landia from './img/chedrauilandia.webp';
import farmacia from './img/farmacia.webp';
import ofertas from './img/ofertas.webp';
import cuestaMenos from './img/cuestaMenos.webp';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


export function NavMenu() {
  return (
    <>
      <Navbar className="bg-body-tertiary bodyNav">
        <FontAwesomeIcon className='IconBar' icon={faBars} />
        <Container className='containerImag' style={{ justifyContent: 'center' }}>

          <Navbar.Brand href="#home">
            <Image className='imgCategory' src={selectoImg} fluid />
          </Navbar.Brand>

          <Navbar.Brand href="#home">
            <Image className='imgCategory' src={martiMiercoles} fluid />
          </Navbar.Brand>

          <Navbar.Brand href="#home">
            <Image className='imgCategory' src={landia} fluid />
          </Navbar.Brand>

          <Navbar.Brand href="#home">
            <Image className='imgCategory' src={farmacia} fluid />
          </Navbar.Brand>

          <Navbar.Brand href="#home">
            <Image className='imgCategory' src={ofertas} fluid />
          </Navbar.Brand>

          <Navbar.Brand href="#home">
            <Image className='imgCategory' src={cuestaMenos} fluid />
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

