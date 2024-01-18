import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './stylesNav2.css';
import  selectoImg  from './img/selecto.png';
import  martiMiercoles  from './img/miercoles.webp';
import  landia  from './img/chedrauilandia.webp';
import  farmacia  from './img/farmacia.webp';
import  ofertas  from './img/ofertas.webp';
import  cuestaMenos  from './img/cuestaMenos.webp';
export function NavMenu() {
  return (
    <>
       {/* // src\Components\Navbar\logoChedraui.png */}
      <Navbar className="bg-body-tertiary bodyNav">
        <Container className='containerImag' style={{  justifyContent: 'center' }}>
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
        <Container className='containerMenu' style={{  justifyContent: 'end' }} >
          <Navbar.Brand href="#home">Folletos</Navbar.Brand>
          <Navbar.Brand href="#home">Recetas</Navbar.Brand>
          <Navbar.Brand href="#home">Ayuda</Navbar.Brand>
        </Container>
      </Navbar>
      
    </>
  );
}

// export default NavMenu;



// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// import './stylesNav2.css';

//  export function BarraNavbar() {
//   return (
//     <Navbar expand="lg" className="navbar">
//       <Container fluid className='contenedorNav'>
//         <Navbar.Brand href="/">
//           <img
//           src="src\Components\Navbar\logoChedraui.png"
//             alt="Logo"
//             height="45"
//             className="d-inline-block align-top"
//           />{' '}
//           </Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" className='nav' />
//         <Navbar.Collapse id="navbarScroll">

//            <Form className="d-flex buscador">
//             <Form.Control
//               type="search"
//               placeholder="¿Qué estas buscando?"
//               className="me-2"
//               aria-label="¿Qué estas buscando?"
//             />
//             {/* <Button variant="outline-success"></Button> */}
//           </Form>
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             // style={{ maxHeight: '100px'}}
//             navbarScroll
//           >
//             <Nav.Link className="ml-auto" href="#action1">Mi Cuenta<br/> <b>Ingresar</b></Nav.Link>
//             <Nav.Link className="ml-auto" href="#action2">Agregar Dirección </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }
