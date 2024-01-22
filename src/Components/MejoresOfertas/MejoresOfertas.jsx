
import { Container, Row, Col } from 'react-bootstrap'
import './stylesM.css'

export default function MejoresOfertas() {
  return (
    <Container className='containerMejoresOfertas'>
      <Row>
        <Col className='titleTarjetas' xs={12}>
          <h1>Las mejores ofertas para tu familia</h1>
        </Col>
      </Row>

      <Row>
        <Col xs={3} className='Tarjetas'>
        </Col>
        <Col xs={3} className='Tarjetas'>
        </Col>
        <Col xs={3} className='Tarjetas'>
        </Col>
        <Col xs={3} className='Tarjetas'>
        </Col>
      </Row>
    </Container>
  )
}
