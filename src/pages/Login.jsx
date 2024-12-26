import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Col, Container, Form, FormGroup, Row } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'


import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../firebase.config'

import { toast } from 'react-toastify';
import '../Styles/login.css'
import { doc, getDoc } from 'firebase/firestore'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [isCurrentUser, setIsCurrentUser] = useState(null)

  const navigate = useNavigate()

  const signIn = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      )
      const user = userCredential.user;
      const res = getDoc(doc(db, "users", user.uid));

      const userData = (await res).data();

      if (userData.role) {
        navigate('/dashboard')
      }
      else {
        setLoading(false)
        toast.success('Login Successful')
        navigate("/checkout")
      }




    } catch (error) {
      setLoading(false)
      toast.error(error.message)
    }
  }






  return (
    <Helmet title='Login'>
      <Container className='mt-5 mb-5'>
        <Row>
          {
            loading ?
              (
                <Col lg='12' className='text-center'><h5 className='font-bold'>Loading.....</h5></Col>
              ) : (
                <Col lg='6' className='m-auto text-center'>
                  <h3 className="font-bold fs-4 mb-4">LOGIN</h3>


                  <Form className='auth__form' onSubmit={signIn}>
                    <FormGroup className='form__group'>
                      <input type="email" placeholder='Enter your email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      />
                    </FormGroup>

                    <FormGroup className='form__group'>
                      <input type="password" placeholder='Enter your password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                      />
                    </FormGroup>

                    <button type='submit' className="buy__btn login__btn">Login</button>
                    <p className='mt-3'>Don't have account ? <Link to='/signup'>Create an account</Link></p>
                  </Form>
                </Col>
              )

          }

        </Row>
      </Container>
    </Helmet>

  )
}

export default Login