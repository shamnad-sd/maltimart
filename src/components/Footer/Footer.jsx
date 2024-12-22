import React from 'react'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'
import logo from '../../assets/images/eco-logo.png'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='4'>
          <div className="logo">
             <div>
              <h1 className='text-white'>Multimart</h1>
             </div>
          </div>
          <p className="footer__text  text-justify">
              Lorem, ipsum dolor sit amet consectetur
              adipisicing elit Similique fuga ex voluptas 
              id quod maiores.
             </p>
           </Col>

          <Col lg='3'>
          <div className="footer__quicks-link">
            <h4 className="quick__links-title text-2xl font-medium">Top Categories</h4>
            
            <ListGroup className='mb-3'>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Mobile Phone</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Modern Sofa</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Arm Chair</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Smart Watches</Link>
              </ListGroupItem>
            </ListGroup>

          </div>
          </Col>

          <Col lg='2'>
          <div className="footer__quicks-link">
            <h4 className="quick__links-title text-2xl font-medium">Useful Links</h4>
            
            <ListGroup className='mb-3'>
              <ListGroupItem className='ps-0 border-0 '>
                <Link to='/shop'>Shop</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='/cart'>Cart</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='/login'>Arm Chair</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Privacy Policy</Link>
              </ListGroupItem>
            </ListGroup>

          </div>
          </Col>

          <Col lg='3'>
          <div className="footer__quicks-link">
            <h4 className="quick__links-title text-2xl font-medium">Contact</h4>
            
            <ListGroup className='footer__contact'>
              <ListGroupItem className='ps-0 border-0 flex items-center gap-2'>
                <span><i className="ri-map-pin-line"></i></span>
                <p>1566 Ernakulam, Kochi, Kakkanad</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 ps-0 border-0 flex items-center gap-2'>
              <span><i className="ri-phone-line"></i></span>
              <p>+908899003345</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 ps-0 border-0 flex items-center gap-2'>
              <span><i className="ri-mail-line"></i></span>
              <p>multistore@gmail.com</p>
              </ListGroupItem>
            </ListGroup>

          </div>
          </Col>
          <Col lg='12'>
          <p className="footer__copyrights">
            Copyright {year} Developed by Shamnad SD. All rights reserved
          </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer