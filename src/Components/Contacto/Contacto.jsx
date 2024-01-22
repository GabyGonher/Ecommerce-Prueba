import './stylesContacto.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

export default function Contacto() {
  return (
    <Container className='containerContacto'>
      <Row>
        <Col xs={4}>
          <ul style={{ listStyle: 'none' }}>
            <li className='item'>
              <a href="https://github.com/GabyGonher" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className='icon' icon={faGithub} />
              </a>
            </li>
          </ul>
        </Col>
        <Col xs={4}>
          <ul style={{ listStyle: 'none' }}>
            <li className='item'>
              <a href="https://www.linkedin.com/in/gabriela-gonzalez-herrera/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className='icon' icon={faLinkedin} />
              </a>
            </li>
          </ul>
        </Col>
        <Col xs={4}>
          <ul style={{ listStyle: 'none' }}>
            <li className='item'>
              <a href="https://drive.google.com/file/d/1sVnEcsWqUlTKI9lSKZ_1c1VWxX2GmXa1/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className='icon' icon={faAddressBook} />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}