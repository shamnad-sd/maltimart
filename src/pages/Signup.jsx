import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Col, Container, Form, FormGroup, Row } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'


import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { setDoc, doc } from 'firebase/firestore';

import { auth } from '../firebase.config';
// import { storage } from '../firebase.config';
import { db } from '../firebase.config';

import { toast } from 'react-toastify';

import '../Styles/login.css'

const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [file, setFile] = useState(null)
  const [userImg, setUserImg] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const signup = async (e) => {
    e.preventDefault()

    setLoading(true)

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password);
      const user = userCredential.user

      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        displayName: username,
        imgUrl:userImg,
        email,
        role:false
      })

      setLoading(false)
      toast.success('User created successfully')
      navigate('/login')

    } catch (error) {
      setLoading(false)
      toast.error(error, 'something went wrong')
    }
  }


  return (
    <Helmet title='SignUp'>
      <Container className='mt-5 mb-5'>
        <Row>
          {
            loading ? (
              <Col lg='12' className='text-center'><h5 className='font-bold'>Loading.....</h5></Col>
            ) : (
              <Col lg='6' className='m-auto text-center'>
                <h3 className="font-bold fs-4 mb-4">SIGNUP</h3>


                <Form className='auth__form' onSubmit={signup}>

                  <FormGroup className='form__group'>
                    <input type="text" placeholder='Username'
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                    />
                  </FormGroup>

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

                  <FormGroup className='form__group'>
                    <input type="text" placeholder='URL' value={userImg} onChange={e => setUserImg(e.target.value)} required />
                  </FormGroup>

                  <button type='submit' className="buy__btn login__btn">Create an Account</button>
                  <p className='mt-3'>Already have account ? <Link to='/login'>Login</Link></p>
                </Form>
              </Col>
            )
          }

        </Row>
      </Container>
    </Helmet>

  )
}

export default Signup