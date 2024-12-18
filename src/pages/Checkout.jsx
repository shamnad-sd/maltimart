import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Col, Container, Form, FormGroup, Row } from 'reactstrap'
import '../Styles/checkout.css'
import { useSelector } from 'react-redux'

const Checkout = () => {

  const totalQty = useSelector(state =>state.cart.totalQuantity)
  const totalAmount = useSelector(state => state.cart.totalAmount)

  return (
    <Helmet title='CheckOut'>
      <CommonSection title='checkout' />
      <Container>
        <Row>
          <Col lg='8'>
            <h6 className='mb-4 mt-4 font-bold'>Billing Information</h6>
            <Form className='billing__form'>
              <FormGroup className='form__group'>
                <input type="text" placeholder='Enter your name' />
              </FormGroup>

              <FormGroup className='form__group'>
                <input type="mail" placeholder='Enter your mail' />
              </FormGroup>

              <FormGroup className='form__group'>
                <input type="number" placeholder='Phone number' />
              </FormGroup>

              <FormGroup className='form__group'>
                <input type="text" placeholder='Street address' />
              </FormGroup>

              <FormGroup className='form__group'>
                <input type="text" placeholder='City' />
              </FormGroup>

              <FormGroup className='form__group'>
                <input type="text" placeholder='Postal Code' />
              </FormGroup>

              <FormGroup className='form__group mb-5'>
                <input type="text" placeholder='Country ' />
              </FormGroup>

            </Form>
          </Col>


          <Col lg='4'>
            <div className="checkout__cart">
              <h6>Total Qty: <span>{totalQty} items</span> </h6>
              <h6>Subtotal: <span>${totalAmount}</span> </h6>

              <h6>
              <span>Shipping : <br />Free Shipping</span><span>$0</span> </h6>

              <h4 className='fs-5'>Total Cost: <span>${totalAmount}</span></h4>
            <button className="buy__btn auth__btn bg-white text-black w-100">Place an order</button>
            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>

  )
}

export default Checkout