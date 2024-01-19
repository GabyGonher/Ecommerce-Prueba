import { Col, Container, Row } from "react-bootstrap"
import './stylesCardOferta.css'
import Image from 'react-bootstrap/Image';

// const productos = [

//   {
//     title: 'Vinos y Licores',
//     img: 'https://chedrauimx.vteximg.com.br/arquivos/ofertas_che_cat_vinos.png'
//   },
//    {
//     title: 'Frutas y verduras',
//     img: 'https://chedrauimx.vteximg.com.br/arquivos/ofertas_che_cat_FRUTAS.png'
//   },
//    {
//     title: 'Yoghurt y fermentados',
//     img: 'https://chedrauimx.vteximg.com.br/arquivos/ofertas_che_cat_YOGURT.png'
//   },
//    {
//     title: 'Quesos',
//     img: 'https://chedrauimx.vteximg.com.br/arquivos/ofertas_che_cat_QUESO.png'
//   },
//   ];

// console.log(productos[0].title)





export default function CardOferta(producto) {
  // console.log(producto.producto);
  // const urlImagen = producto.productos.img;
  // const title = producto.productos.title;
  const {img, title} = producto.productos;
  return (

<Container fluid className="Card">
      <Row>
        <Col xs={12} md={6} className='imgContainer'>
          <Image
          src={img}
          alt={title}
          fluid />
        </Col>
        <Col xs={12} md={6} className='titleClasificacion'>
          <p>{title}</p>
        </Col>
      </Row>
    </Container>
  )
}


