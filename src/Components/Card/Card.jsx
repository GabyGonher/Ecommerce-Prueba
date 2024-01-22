import { Card, Col, Button } from 'react-bootstrap';
import './stylesCard.css'
import { faShoppingCart, faHeart, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export function CardProduct(product) {
  const { image, title, price, id } = product.product;
  // const urlDetalleProduct = `/detalles/${id}`
  const urlDetalleProduct = `https://ecommerce-chedraui.vercel.app/detalles/${id}`
  const enviarPD = () => {
    window.location.href = urlDetalleProduct;

  }
  return (
    <Col>
      <Card className='bodyCard'>
        <a href={urlDetalleProduct} target="_self" rel="noopener noreferrer" style={{ display: 'block' }}>
          <Card.Img variant="top" className='ImagenCard mt-5' src={image} onClick={enviarPD} fuid />
        </a>
        <Card.Body style={{ textAlign: 'center', height: '10%' }}> <FontAwesomeIcon className='heart' icon={faHeart} /><FontAwesomeIcon className='List' icon={faList} />
          <Card.Text className='textCard text-truncate mt-2' >{title}</Card.Text>
          <p className='precio' style={{ paddingTop: '1rem' }}>${price}</p>
          <Button className='btnComprar' > <FontAwesomeIcon icon={faShoppingCart} /> Agregar</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

