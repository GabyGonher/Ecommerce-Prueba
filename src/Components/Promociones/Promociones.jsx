import {
  Container, Row, Col,
  Image
} from 'react-bootstrap'
import './stylesPromo.css'
import { promociones } from "../../Data/Promociones/DataPromociones";

export default function Promociones() {
  console.log(promociones, 'promociones')
  console.log(promociones[0].text)
  // const { img, title } = oferta.ofertas;
  return (
    <Container className='containerPromo'>
      <Row>
        <Col className='targetProducts BigTarget' xs={6}>
          <h1 className='bigPrice'>{promociones[0].price}</h1>
          <h6 className='bigText'>{promociones[0].price2}</h6>
          <h6 className='bigDescription'>{promociones[0].text}</h6>
          <h6>COMPRAR</h6>
          <Image className='bigImage' src={promociones[0].img} />
          {/* <img src={promociones[0].img} alt="Descripción de la imagen" /> */}


        </Col>
        <Col className='targetProducts'>
          <h1>{promociones[1].price}</h1>
          <h5 className='smText'>{promociones[1].price2}</h5>
          <h6 className='bigDescription'>{promociones[1].text}</h6>
          <h6>COMPRAR</h6>
          {/* <Image className='bigImage' src={promociones[1].img} /> */}

        </Col>
        <Col className='targetProducts'>
          <h1>{promociones[2].price}</h1>
          <h5 className='smText'>{promociones[2].price2}</h5>
          <h5 className='smDescription'>{promociones[2].text}</h5>
          <h6>COMPRAR</h6>
          {/* <Image className='bigImage' src={promociones[2].img} /> */}
        </Col>
      </Row>
      <Row>
        <Col className='targetProducts'>
          <h1>{promociones[3].price}</h1>
          <h5 className='smText'>{promociones[3].price2}</h5>
          <h5 className='smDescription'>{promociones[3].text}</h5>
          <h6>COMPRAR</h6>
          {/* <Image className='bigImage' src={promociones[3].img} /> */}
        </Col>
        <Col className='targetProducts'>
          <h1>{promociones[4].price}</h1>
          <h5 className='smText'>{promociones[4].price2}</h5>
          <h5 className='smDescription'>{promociones[4].text}</h5>
          <h6>COMPRAR</h6>
          {/* <Image className='bigImage' src={promociones[4].img} /> */}
        </Col>
        <Col className='targetProducts BigTarget' xs={6}>
          <h1 className='bigPrice'>{promociones[5].price}</h1>
          <h6 className='bigText'>{promociones[5].price2}</h6>
          <h6 className='bigDescription'>{promociones[5].text}</h6>
          <h6>COMPRAR</h6>
          {/* <Image className='bigImage' src={promociones[5].img} /> */}

        </Col>
      </Row>

    </Container>
  )
}
