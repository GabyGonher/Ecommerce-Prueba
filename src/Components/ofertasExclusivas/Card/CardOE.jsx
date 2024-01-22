import { Col, Container, Row } from "react-bootstrap"
import './stylesCard.css'



export default function OfertaExclusiva(oferta) {
  const { img, title } = oferta.ofertas;
  return (

    <Container fluid className="CardE">

      <Row>
        <Col xs={12} md={6} className='ContainerImg'>
          <img className="img" src={img} alt={title}
          />

        </Col>

        <Col xs={12} md={6} className='tituloProduct'>
          <p>{title}</p>
        </Col>
      </Row>

    </Container >
  )
}

