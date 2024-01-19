import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import './styleOferta.css';
import CardOferta from './CardOferta/CardOferta';
import { productos } from '../../Data/DataOferta/DataOferta';


console.log(productos[0].img)
console.log(productos)


export default function SeccionOferta() {
  return (
    <>
    
<Container fluid className='seccionOferta'>
      <Row >
        <Col xs={12} className='titleOferta text-center' >Ofertas Chedraui</Col>
        <Col xs={12} className='seccionProduct  d-flex justify-content-between' >
          
          {
            productos.map( producto => (
              <CardOferta
              key={producto.title} productos={producto}
              />
              
            ))
          }
        </Col>
      </Row>
    </Container>

    
    </>
  )
}