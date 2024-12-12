import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Col, Container, Row } from 'reactstrap'
import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import '../Styles/product-details.css'

const ProductDetails = () => {

  const { id } = useParams()
  const product = products.find(item => item.id === id)

  const { imgUrl, productName, price, avgRating, review, description, shortDesc } = product

  return <Helmet title='ProductDetails'>
    <CommonSection />

    <section className='pt-0'>
      <Container>
        <Row>
          <Col lg='6' >
            <img src={imgUrl} alt="" /></Col>

          <Col lg='6' >
          <div className="product__details"> 
            <h2>{productName}</h2>
            <div className="product__rating flex items-center gap-2 mb-3">
              <div>
                <span><i className="ri-star-fill"></i></span>
                <span><i className="ri-star-fill"></i></span>
                <span><i className="ri-star-fill"></i></span>
                <span><i className="ri-star-fill"></i></span>
                <span><i className="ri-star-half-s-fill"></i></span>
              </div>
              <p>(<span>{avgRating}</span> Ratings)</p>
            </div>
            <span>${price}</span>
            <p>{shortDesc}</p>

            <button className="buy__btn">Add to Cart</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default ProductDetails