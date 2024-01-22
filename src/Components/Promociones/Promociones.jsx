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
        <Col className='titlePromociones' xs={12}>
          <h1>Promociones Chedraui que no te puedes perder</h1>
        </Col>
      </Row>
      <Row>
        <Col className='targetProducts BigTarget' xs={6}>
          <Row>
            <Col xs={6}>
              <h1 className='bigPrice'>{promociones[0].price}</h1>
              <h5 className='bigText'>{promociones[0].price2}</h5>
              <h6 className='bigDescription'>{promociones[0].text}</h6>
              <h6 className='buyText'>{`COMPRAR > `}</h6>
            </Col>
            <Col xs={6}>
              <Image className='bigImage zoom-image' fluid src={promociones[0].img} />
            </Col>
          </Row>
        </Col>


        <Col className='targetProducts'>
          <Row>
            <Col xs={12}>
              <h1 className='smPrice'>{promociones[1].price}</h1>
              <h5 className='smText'>{promociones[1].price2}</h5>
              <h6 className='bigDescription'>{promociones[1].text}</h6>
              <h6 className='buyText'>{`COMPRAR > `}</h6>
            </Col>
            <Col xs={12}>
              <Image className='bigImage zoom-image' fluid src={promociones[1].img} />
            </Col>
          </Row>
        </Col>

        <Col className='targetProducts'>
          <Row>
            <Col xs={12}>
              <h1 className='smPrice'>{promociones[2].price}</h1>
              <h5 className='smText'>{promociones[2].price2}</h5>
              <h5 className='smDescription'>{promociones[2].text}</h5>
              <h6 className='buyText'>{`COMPRAR > `}</h6>
            </Col>
            <Col xs={12} >
              <Image className='bigImage zoom-image' fluid src={promociones[2].img} />
            </Col>
          </Row>
        </Col>
      </Row>


      <Row>
        <Col xs={3} className='targetProducts me-0'>
          <Row>
            <Col xs={12}>
              <h5 className='smPrice'>{promociones[3].price}</h5>
              <h1 className='smText'>{promociones[3].price2}</h1>
              <h5 className='smDescription'>{promociones[3].text}</h5>
              <h6 className='buyText'>{`COMPRAR > `}</h6>
            </Col>
            <Col xs={12}>
              <Image className='bigImage zoom-image' fluid src={promociones[3].img} />
            </Col>
          </Row>
        </Col>

        <Col xs={3} className='targetProducts me-0'>
          <Row>
            <Col xs={12}>
              <h5 className='smPrice'>{promociones[4].price}</h5>
              <h1 className='smText'>{promociones[4].price2}</h1>
              <h5 className='smDescription'>{promociones[4].text}</h5>
              <h6 className='buyText'>{`COMPRAR > `}</h6>
            </Col>
            <Col xs={12}>
              <Image className='bigImage zoom-image' fluid src={promociones[4].img} />
            </Col>
          </Row>
        </Col>

        <Col className='targetProducts me-0 BigTarget' xs={6}>
          <Row>
            <Col xs={6}>
              <h5 className='bigPrice'>{promociones[5].price}</h5>
              <h1 className='bigText'>{promociones[5].price2}</h1>
              <h6 className='bigDescription'>{promociones[5].text}</h6>
              <h6 className='buyText'>{`COMPRAR > `}</h6>
            </Col>
            <Col xs={6}>
              <Image className='bigImage zoom-image' fluid src={promociones[5].img} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>

  )
}
