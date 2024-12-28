import React, { useEffect, useState } from 'react'
import Helmet from '../components/Helmet/Helmet'

import { Container, Row, Col } from 'reactstrap'

import heroImg from '../../src/assets/images/hero-img.png'

// import Products from '../assets/data/products'

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../Styles/home.css'
import Services from '../services/Services'
import ProductList from '../components/UI/ProductList'

import counterImg from '../assets/images/counter-timer-img.png'
import Clock from '../components/UI/Clock'
import useGetData from '../custom-hooks/useGetData'

const Home = () => {

  const { data:products, loading } = useGetData('products')

  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSalesProducts, setBestSalesProducts] = useState([])
  const [mobileProducts, setMobileProducts] = useState([])
  const [wirelessProducts, setWirelessProducts] = useState([])
  const [popularProducts, setPopularProducts] = useState([])

  const year = new Date().getFullYear()

  useEffect(() => {
    const filteredTrendingProducts = products.filter((item) => item.category === "chair");
    setTrendingProducts(filteredTrendingProducts)


    const filteredBestSalesProducts = products.filter((item) => item.category === "sofa");
    setBestSalesProducts(filteredBestSalesProducts)


    const filteredMobileProducts = products.filter((item) => item.category === "stools");
    setMobileProducts(filteredMobileProducts)


    const filteredWirelessProducts = products.filter((item) => item.category === "lighting");
    setWirelessProducts(filteredWirelessProducts)

    const filteredPopularProducts = products.filter((item) => item.category === "tables");
    setPopularProducts(filteredPopularProducts)



  }, [products])

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
              <motion.button whileTap={{ scale: 1.2 }} className="buy__btn"><Link to='/shop'>SHOP NOW</Link></motion.button>
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

    <Services />

    <section className="trending__products">
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className="section__title mb-10">
              Trending Products
            </h2>
          </Col>
          {
            loading ? (<h4>Loading......</h4>)
              : (
                <ProductList data={trendingProducts} />
              )
          }

        </Row>
      </Container>
    </section>

    <section className="best__sale mb-5">
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className="section__title mb-10">
              Best Sale
            </h2>
          </Col>
          {
            loading ? (<h4>Loading..........</h4>)
              : (
                <ProductList data={bestSalesProducts} />
              )
          }


        </Row>
      </Container>
    </section>

    <section className="timer__count">
      <Container>
        <Row>
          <Col lg='8' md='8' >
            <div className="clock__top-content">
              <h4 className='text-white fs-7 mb-2'>Limited Offers</h4>
              <h3 className='text-white fs-5 mb-2'>Quality Armchair</h3>
            </div>
            <Clock />

            <motion.button whileTap={{ scale: 1.2 }} className="buy__btn store__btn">
              <Link to='/shop'>Visit Store</Link>
            </motion.button>
          </Col>

          <Col lg='4' md='4' className='text-end'>
            <img src={counterImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>

    <section className="new__arrivals">
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h2 className="section__title">
              New Arrivals
            </h2>
          </Col>
          {
            loading ? (<h4>Loading........</h4>)
              : (
                <ProductList data={mobileProducts} />
              )
          }

          {
            loading ? (<h4>Loading..........</h4>)
              : (
                <ProductList data={wirelessProducts} />
              )
          }

        </Row>
      </Container>
    </section>

    <section className="popular__category">
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className="section__title mb-5">
              Popular In Category
            </h2>
          </Col>
          {
            loading ? (<h4>Loading......</h4>)
              : (
                <ProductList data={popularProducts} />
              )
          }

          

        </Row>
      </Container>
    </section>

  </Helmet>
}

export default Home