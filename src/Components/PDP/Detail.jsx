import { Container, Row, Col, Button } from 'react-bootstrap'
import { faShoppingCart, faHeart, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './stylesDetail.css'

export default function Detail() {
  return (
    <>
      <Container fluid className='ContenedorDetail'>
        <Row className="mb-3" style={{ gap: "5rem" }}>
          <Col md={{ span: 2, offset: 2 }} className='ImgDetail'>
          </Col>
          <Col xs={12} md={6} className='TextDetail'>
            <FontAwesomeIcon className='heart' icon={faHeart} /><FontAwesomeIcon className='List' icon={faList} />
            <h5 className='titleDetail'>Manzana Red delicius</h5>
            <h6 className='category'>Frutas y verduras</h6><br />
            <h6 className='descriptionDetail'>Descripción:sdasd  sdsd sdsdsd dsdsd f g fgfgf gfgfg gfgfgfgfgfg fgfgfgfg fsd</h6> <br />
            <h6 className='rate'>Tasa: 2121</h6>
            <h6 className='count'> contador: 4545</h6><br />
            <h2 className='priceDetail'>$10</h2>
            <Button className='btnBuy' > <FontAwesomeIcon icon={faShoppingCart} /> Agregar</Button>
          </Col>
        </Row>
      </Container>


    </>

  )
}

{/* <div style={{ height: '400px', backgroundColor: 'red' }}></div> */ }