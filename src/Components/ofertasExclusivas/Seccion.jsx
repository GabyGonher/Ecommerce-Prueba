import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import './stylesOe.css'
import OfertaExclusiva from './Card/CardOE';
// import './styleOferta.css';
// import CardOferta from './CardOferta/CardOferta';
// import { productos } from '../../Data/DataOferta/DataOferta';


// console.log(productos[0].img)
// console.log(productos)


export default function SeccionOfertaExclusiva() {
  return (
    <>

      <Container fluid className='OfertaExclusiva'>
        <Row >
          <Col xs={12} className='titleOfertaE text-center' >Ofertas exclusivas de Chedraui</Col>
          <Col xs={12} className='seccionProductE  d-flex justify-content-between' >
            <OfertaExclusiva />


          </Col>
        </Row>
      </Container>


    </>
  )
}


// {
//   productos.map(producto => (
//     <CardOferta
//       key={producto.title} productos={producto}
//     />

//   ))
// }