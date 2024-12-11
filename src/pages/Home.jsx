import React from 'react'
import Helmet from '../components/Helmet/Helmet'

import { Container, Row, Col } from 'reactstrap'

import heroImg from '../../src/assets/images/hero-img.png'

import { Link } from 'react-router-dom'
import { motion  } from 'framer-motion'
import '../Styles/home.css'

const Home = () => {

  const year = new Date().getFullYear()

  return <Helmet title={"Home"}>
    <section className="hero__section">
      <Container>
        <Row>

          <Col lg='6' md='6'>
          <div className="hero__content">
            <p className="hero__subtitle">
              Trending Products in {year}
            </p>
            <h2> Make Your Interior More Minimalistic & Modern </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam mollitia nam nihil dolor nisi quaerat maxime labore. Atque, dolores sit!</p>
            <motion.button whileTap={{scale:1.2}} className="buy__btn"><Link to='/shop'>SHOP NOW</Link></motion.button>
          </div>
          </Col>

          <Col lg='6' md='6'>
            <div className="hero__img">
              <img src={heroImg} alt="heroImg" />
            </div>
          </Col>




        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Home