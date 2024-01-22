import { Container, Row, Col } from 'react-bootstrap'
import './stylesPromo.css'

export default function Promociones() {
  return (
    <Container className='containerPromo'>
      <Row>
        <Col className='targetProducts' xs={6}>Grande</Col>
        <Col className='targetProducts'></Col>
        <Col className='targetProducts'></Col>
      </Row>
      <Row>
        <Col className='targetProducts'></Col>
        <Col className='targetProducts'></Col>
        <Col className='targetProducts' xs={6}>grande</Col>
      </Row>

    </Container>
  )
}
