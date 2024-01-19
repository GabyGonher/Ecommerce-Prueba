import { Col, Container, Row } from "react-bootstrap"
import './stylesCard.css'
// import Image from 'react-bootstrap/Image';



export default function OfertaExclusiva() {
  const urlImg = 'https://chedrauimx.vteximg.com.br/arquivos/ofertas_chedraui_res-hover.jpg'

  return (

    <Container fluid className="CardE">
      <Row>
        <Col xs={12} md={6} className='ContainerImg'
        // style={{ backgroundImage: `url("${urlImg}")`, width: '100%', height: '100%' }}
        >
          <img className="img" src={urlImg} alt='imagen'
          //  style={{ width: '100%', height: '100%' }} 
          />
          {/* <Image
          src={urlImg}
          alt='imagen'
          fluid /> */}
        </Col>
        <Col xs={12} md={6} className='tituloProducto'>
          <p>Titulo</p>
          {/* <p>{ofertas[0].title}</p> */}
        </Col>
      </Row>
    </Container >
  )
}

