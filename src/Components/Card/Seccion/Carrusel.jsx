import Carousel from 'react-bootstrap/Carousel';
import { CardProduct } from '../Card';
import DataApi from '../../../Data/FakeApi/DataApi';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import '../stylesCard.css'





export function Carrusel(category = null) {
  const products = DataApi(category.category);
  console.log(products);

  if (products) {
    return (
      <Container fluid className='contenCard'>
        <Row>
          <Col xs={12}>
            <Carousel>
              {(() => {
                const carouselItems = [];
                const totalProducts = products.length;

                for (let i = 0; i < totalProducts; i += 6) {
                  const cards = [];
                  for (let j = i; j < Math.min(i + 6, totalProducts); j++) {
                    cards.push(
                      <Col xs={2} key={products[j].id}>
                        <CardProduct product={products[j]} />
                      </Col>
                    );
                  }

                  carouselItems.push(
                    <Carousel.Item interval={5000} key={i}>
                      <Row>{cards}</Row>
                    </Carousel.Item>
                  );
                }

                return carouselItems;
              })()}
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return <Spinner animation='border' variant='warning' />;
  }
}



