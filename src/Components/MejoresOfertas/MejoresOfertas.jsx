
import { Container, Row, Col, Image } from 'react-bootstrap'
import './stylesM.css'
import { mejorOferta } from '../../Data/MejoresOfertas/DataMejorOferta';


export default function MejoresOfertas() {
  console.log(mejorOferta);
  console.log(mejorOferta[0].title);

  return (
    <Container className='containerMejoresOfertas'>
      <Row>
        <Col className='titleTarjetas1' xs={12}>
          <h1>Las mejores ofertas para tu familia</h1>
        </Col>
      </Row>

      <Row>
        <Col xs={3} className='Tarjetas' style={{ backgroundColor: '#E88020' }}>
          <h1 className='titleTarjeta'>{mejorOferta[0].title}</h1>
          <Image className='bigImage zoom-image' fluid src={mejorOferta[0].img} />
          <h6 className='textTarjetas' style={{ marginTop: '5rem' }} >{mejorOferta[0].text}</h6>
        </Col>
        <Col xs={3} className='Tarjetas' style={{ backgroundColor: '#E89320' }}>
          <h1 className='titleTarjeta'>{mejorOferta[1].title}</h1>
          <h1 className='titleTarjeta'>{mejorOferta[1].title2}</h1>
          <Image className='bigImage zoom-image' fluid src={mejorOferta[1].img} />
          <h6 className='textTarjetas' style={{ marginTop: '1.6rem' }} >{mejorOferta[1].text}</h6>
        </Col>
        <Col xs={3} className='Tarjetas' style={{ backgroundColor: '#F8AA2B' }}>
          <h1 className='titleTarjeta'>{mejorOferta[2].title}</h1>
          <Image className='bigImage zoom-image' fluid src={mejorOferta[2].img} />
          <h6 className='textTarjetas' style={{ marginTop: '5rem' }} >{mejorOferta[2].text}</h6>
        </Col>
        <Col xs={3} className='Tarjetas' style={{ backgroundColor: '#F5B54F' }}>
          <h1 className='titleTarjeta'>{mejorOferta[3].title}</h1>
          <Image className='bigImage zoom-image' fluid src={mejorOferta[3].img} />
          <h6 className='textTarjetas' style={{ marginTop: '1.6rem' }} >{mejorOferta[3].text}</h6>
        </Col>
      </Row>
    </Container>
  )
}
