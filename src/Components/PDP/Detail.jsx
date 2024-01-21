import { Container, Row, Col, Button } from 'react-bootstrap'
import { faShoppingCart, faHeart, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import DataApi from '../../Data/FakeApi/DataApi';
import './stylesDetail.css'

export default function Detail() {
  const { id } = useParams();
  const products = DataApi(id);
  console.log(products, "detail");
  // const { image, title, price } = product.product;

  console.log(useParams(id));
  // console.log(product.title)
  // console.log(title);




  return (
    <>
      <Container fluid className='ContenedorDetail'>
        <Row className="mb-3" style={{ gap: "5rem" }}>
          <Col md={{ span: 2, offset: 2 }} className='ImgDetail'>
          </Col>
          <Col xs={12} md={6} className='TextDetail'>
            <FontAwesomeIcon className='Iconheart' icon={faHeart} /><FontAwesomeIcon className='IconList' icon={faList} />
            <h5 className='titleDetail'></h5>
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