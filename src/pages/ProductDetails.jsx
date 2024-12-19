import React, { useEffect, useRef, useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Col, Container, Row } from 'reactstrap'
import { useParams } from 'react-router-dom'
import '../Styles/product-details.css'
import { motion } from 'framer-motion'
import ProductList from '../components/UI/ProductList'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/slices/CartSlice'
import { toast } from 'react-toastify'

import { db } from '../firebase.config'
import { doc, getDoc } from 'firebase/firestore'
import useGetData from '../custom-hooks/useGetData'
const ProductDetails = () => {

  const [product, setProduct] = useState({})

  const [tab, setTab] = useState('desc')

  const reviewUser = useRef('')
  const reviewMsg = useRef('')
  const dispatch = useDispatch()

  const [rating, setRating] = useState(null)
  const { id } = useParams()

  const { data: products } = useGetData('products')

  const docRef = doc(db, 'products', id)

  useEffect(() => {
    const getProduct = async () => {
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        setProduct({ ...docSnap.data(), id: docSnap.id })
      } else {
        console.log('No such document!')
      }
    }
    getProduct()
  }, [])

  const { imgUrl,
    productName,
    price,
    // avgRating,
    // reviews,
    description,
    shortDesc,
    category
  } = product

  const relatedProducts = products.filter(item => item.category === category)

  const submitHandler = (e) => {
    e.preventDefault()

    const reviewUserName = reviewUser.current.value
    const reviewUserMsg = reviewMsg.current.value

    console.log(reviewUserName, reviewUserMsg, rating)

    const reviewObj = {
      userName: reviewUserName,
      message: reviewUserMsg,
      rating,
    }
    console.log(reviewObj)
    toast.success('Review Submitted')
  }

  const addToCart = () => {
    dispatch(addItem({
      id,
      image: imgUrl,
      productName,
      price,
    }));
    toast.success('Product added to cart successfully')
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [product])

  return <Helmet title='ProductDetails'>
    <CommonSection title={productName} />

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
                {/* <p>(<span>{avgRating}</span> Ratings)</p> */}
              </div>

              <div className='flex  items-center gap-3'>
                <span className='product__price'>${price}</span>
                <span>Category : {category}</span>
              </div>
              <p className='mt-3'>{shortDesc}</p>

              <motion.button whileTap={{ scale: 1.2 }} className="buy__btn" onClick={addToCart}>Add to Cart</motion.button>

            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <div className="tap__wrapper flex items-center gap-5">
              <h6 className={`${tab === 'desc' ? 'active__tab' : ''} cursor-pointer`} onClick={() => setTab('desc')}>Description</h6>
              <h6 className={`${tab === 'rev' ? 'active__tab' : ''} cursor-pointer`} onClick={() => setTab('rev')}>Reviews</h6>
            </div>

            {
              tab === 'desc' ? (<div className="tab__content mt-4">
                <p>{description}</p>
              </div>
              ) : (
                <div className='product__review mt-4'>
                  <div className="review__wrapper">
                    <ul>
                      {/* {
                        reviews?.map((item, index) => (
                          <li key={index} className='mb-4'>
                            <h6>Ansaf k</h6>
                            <span>{item.rating} (Rating)</span>
                            <p>{item.text}</p>
                          </li>
                        ))
                      } */}
                    </ul>
                    <div className="review__form">
                      <h4>Leave your Experience</h4>
                      <form onSubmit={submitHandler}>
                        <div className="form__group">
                          <input type="text" placeholder='Enter name' ref={reviewUser} />
                        </div>

                        <div className="form__group flex items-center gap-5 cursor-pointer">
                          <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(1)}>1<i className="ri-star-s-fill"></i></motion.span>
                          <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(2)}>2<i className="ri-star-s-fill"></i></motion.span>
                          <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(3)}>3<i className="ri-star-s-fill"></i></motion.span>
                          <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(4)}>4<i className="ri-star-s-fill"></i></motion.span>
                          <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(5)}>5<i className="ri-star-s-fill"></i></motion.span>
                        </div>

                        <div className="form__group">
                          <textarea rows={4} type="text" placeholder='Review Message...' ref={reviewMsg} required />
                        </div>
                        <motion.button whileTap={{ scale: 1.2 }} type='submit' className="buy__btn" required>Submit</motion.button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
          </Col>

          <Col lg='12' className='mt-5'>
            <h2 className="related__title">You Might Also Like</h2>
          </Col>
          <ProductList data={relatedProducts} />
        </Row>
      </Container>
    </section>

  </Helmet>
}

export default ProductDetails