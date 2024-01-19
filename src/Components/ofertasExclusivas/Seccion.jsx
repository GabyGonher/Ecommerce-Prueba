import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import './stylesOe.css'
import OfertaExclusiva from './Card/CardOE';
import { ofertas } from "../../Data/OfertaExclusiva/DataOfertaExclusiva";


export default function SeccionOfertaExclusiva() {
  return (
    <>
      <Container fluid className='OfertaExclusiva'>
        <Row >
          <Col xs={12} className='titleOfertaE text-center' >Ofertas exclusivas de Chedraui</Col>
          <Col xs={12} className='seccionProductE  d-flex justify-content-between' >

            {
              ofertas.map(oferta => (
                <OfertaExclusiva
                  key={oferta.title} ofertas={oferta}
                />

              ))
            }
          </Col>
        </Row>
      </Container>
    </>
  )
}
