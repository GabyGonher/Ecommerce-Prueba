import { Col, Container, Row } from "react-bootstrap"
import Image from 'react-bootstrap/Image';
// import './stylesCardOferta.css'
import './stylesCard.css'


export default function OfertaExclusiva() {
  // console.log(producto.producto);

  // const { img, title } = producto.productos;
  return (

    <Container fluid className="CardE">
      <Row>
        <Col xs={12} md={6} className='ContainerImg'>
          <Image
            // src='https://chedrauimx.vteximg.com.br/arquivos/ofertas_chedraui_res-hover.jpg'
            alt='imagen'
            fluid />
        </Col>
        <Col xs={12} md={6} className='tituloProducto'>
          <p>Holii</p>
        </Col>
      </Row>
    </Container>
  )
}


