import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../Styles/cart.css'
import { Col, Container, Row } from 'reactstrap'

import { useSelector, useDispatch } from 'react-redux'
import { deleteItem } from '../redux/slices/CartSlice'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'



const Cart = () => {

  const cartItems = useSelector(state => state.cart.cartItems)

  const totalAmount = useSelector(state => state.cart.totalAmount)

  return (
    <Helmet title='Cart'>
      <CommonSection title='Shopping Cart' />
      <section>
        <Container>
          <Row>
            <Col lg='9'>

              {
                cartItems.length === 0 ? <h2 className='fs-6 text-center mt-24'>No Item Added To the Cart</h2> :
                  <table className='table bordered'>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        cartItems.map((item, index) => (
                         <Tr item={item} key={index} />
                        ))
                      }

                    </tbody>
                  </table>
              }


            </Col>
            <Col lg='3'>
            <div className='flex items-center justify-between'>
              <h6 className=' text-xl font-semibold'>SubTotal</h6>
              <span className='fs-4 font-bold'>${totalAmount}</span>
            </div>
            <p className='fs-6 mt-2'>taxes and shipping will calculate in checkout</p>
            <div>
              <button className="buy__btn w-100 "><Link to='/shop'> Continue Shopping </Link></button>
              <button className="buy__btn w-100 mt-3"><Link to='/login'> Check Out </Link></button>
            </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

const Tr = ({item}) => {
  const dispatch = useDispatch()

  const deleteProduct = () =>{
    dispatch(deleteItem(item.id))
  }

  return (
    <tr>
      <td><img src={item.imgUrl} /></td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>{item.quantity}px</td>
      <td><motion.i whileTap={{ scale: 1.2 }} className="ri-delete-bin-line" onClick={deleteProduct}></motion.i></td>
    </tr>
  )
}

export default Cart