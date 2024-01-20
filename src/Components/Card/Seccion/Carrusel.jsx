import Carousel from 'react-bootstrap/Carousel';
import { CardProduct } from '../Card';
// import ExampleCarouselImage from "components/ExampleCarouselImage";



export function Carrusel() {
  return (
    <Carousel>

      <Carousel.Item interval={5000}>

        <CardProduct />
        <Carousel.Caption>

        </Carousel.Caption>


      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <CardProduct />
        <Carousel.Caption>


        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

