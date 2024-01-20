import Button from 'react-bootstrap/Button';
import { Container, Card, Row, Col } from 'react-bootstrap';
import './stylesCard.css'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCartShopping } from '@fortawesome/fontawesome-svg-core/import.macro'



export function CardProduct() {
  return (
    <Container className='contenCard'>
      <Row xs="auto">
        <Col>
          <Card className='bodyCard'
          > <Card.Img variant="top" className='ImagenCard' src="https://i.pinimg.com/236x/16/f6/4b/16f64b3ac9251ef3f449fd314c42ae66.jpg" />
            <Card.Body style={{ textAlign: 'center', height: '10%' }}> <FontAwesomeIcon className='heart' icon={faHeart} />
              {/* <Card.Title>Titulo de producto</Card.Title> */}
              <Card.Text> Manzana roja de las chidas</Card.Text>
              <p className='precio' style={{ paddingTop: '1rem' }}>$10</p>
              <Button className='btnComprar' > <FontAwesomeIcon icon={faShoppingCart} />  Agregar</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

