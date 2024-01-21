import Button from 'react-bootstrap/Button';
import { Card, Col } from 'react-bootstrap';
import './stylesCard.css'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart, faHeart, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCartShopping } from '@fortawesome/fontawesome-svg-core/import.macro'

{/* <FontAwesomeIcon icon="fa-solid fa-list" /> */ }

export function CardProduct(product) {
  // console.log(product.product);
  const { image, title, price, id } = product.product;
  const urlDetalleProduct = `/detalles/${id}`
  const enviarPD = () => {
    window.location.href = urlDetalleProduct;

  }
  return (
    // <Container className='contenCard'>
    // <Row xs="auto">
    <Col>
      <Card className='bodyCard'>
        <a href={urlDetalleProduct} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
          <Card.Img variant="top" className='ImagenCard' src={image} onClick={enviarPD} fuid />
        </a>
        <Card.Body style={{ textAlign: 'center', height: '10%' }}> <FontAwesomeIcon className='heart' icon={faHeart} /><FontAwesomeIcon className='List' icon={faList} />
          {/* <Card.Title>Titulo de producto</Card.Title> */}
          <Card.Text className='textCard' >{title}</Card.Text>
          <p className='precio' style={{ paddingTop: '1rem' }}>${price}</p>
          <Button className='btnComprar' > <FontAwesomeIcon icon={faShoppingCart} /> Agregar</Button>
        </Card.Body>
      </Card>
    </Col>
    // </Row>
    // </Container>
  );
}

