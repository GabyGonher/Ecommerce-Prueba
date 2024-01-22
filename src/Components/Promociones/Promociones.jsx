import { Container, Row, Col, Image } from 'react-bootstrap'
import './stylesPromo.css'

export default function Promociones() {
  return (
    <Container className='containerPromo'>
      <Row>
        <Col className='targetProducts BigTarget' xs={6}>
          <h1 className='bigPrice'>$</h1>
          <h6 className='bigDescription'></h6>
          <h6>COMPRAR</h6>
          <Image className='bigImage' src="" />

        </Col>
        <Col className='targetProducts'>
          <h1>$</h1>
          <h5 className='smDescription'> </h5>
          <h6>COMPRAR</h6>

        </Col>
        <Col className='targetProducts'>
          <h1>$</h1>
          <h5 className='smDescription'> </h5>
          <h6>COMPRAR</h6>
        </Col>
      </Row>
      <Row>
        <Col className='targetProducts'>
          <h1>$</h1>
          <h5 className='smDescription'> </h5>
          <h6>COMPRAR</h6>
        </Col>
        <Col className='targetProducts'>
          <h1>$</h1>
          <h5 className='smDescription'> </h5>
          <h6>COMPRAR</h6>
        </Col>
        <Col className='targetProducts BigTarget' xs={6}>
          <h1 className='bigPrice'>$</h1>
          <h6 className='bigDescription'></h6>
          <h6>COMPRAR</h6>
          <Image className='bigImage' src="" />

        </Col>
      </Row>

    </Container>
  )
}
