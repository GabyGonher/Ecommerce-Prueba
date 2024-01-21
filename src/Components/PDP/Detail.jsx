import { Container, Row, Col, Button, Image, Spinner } from 'react-bootstrap'
import { faShoppingCart, faHeart, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import DataApi from '../../Data/FakeApi/DataApi';
import './stylesDetail.css'
import { Carrusel } from '../Card/Seccion/Carrusel';


export default function Detail() {
  const { id } = useParams();
  const products = DataApi(id);


  if (products) {
    return (
      <>
        <Container fluid className='ContenedorDetail' style={{ marginBottom: '5rem' }}>
          <Row className="mb-3" style={{ gap: "5rem" }}>
            <Col md={{ span: 2, offset: 2 }} className='ImgDetail'>
              <Image src={products.image} fluid />
            </Col>
            <Col xs={12} md={6} className='TextDetail'>
              <div>
                <FontAwesomeIcon className='Iconheart' icon={faHeart} />
                <FontAwesomeIcon className='IconList' icon={faList} />
              </div>
              <h5 className='titleDetail'>{products.title}</h5>
              <h6 className='category'>{products.category}</h6>
              <br />
              <h6 className='descriptionDetail'>{products.description}</h6>
              <br />
              <h6 className='rate'><b>{products.rating.rate} de 5</b></h6>
              <h6 className='count'>Contador: {products.rating.count}</h6>
              <br />
              <h2 className='priceDetail'>${products.price}</h2>
              <Button className='btnBuy'>
                <FontAwesomeIcon icon={faShoppingCart} /> Agregar
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 className='productRelacionado mt-5'>Productos relacionados</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Carrusel category={products.category} className='' />
            </Col>
          </Row>
        </Container>
      </>
    );
  } else {
    return <Spinner animation='border' variant='warning' />;

  }


}
0