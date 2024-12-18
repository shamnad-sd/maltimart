import React, { useState } from 'react'
import { Col, Container, Form, FormGroup, Row } from 'reactstrap'
import { toast } from 'react-toastify'

import { db } from '../firebase.config'

import { collection, addDoc } from 'firebase/firestore'



const AddProducts = () => {

  const [enterTitle, setEnterTitle] = useState('')
  const [enterShortDesc, setEnterShortDesc] = useState('')
  const [enterDescription, setEnterDescription] = useState('')
  const [enterPrice, setEnterPrice] = useState('')
  const [enterCategory, setEnterCategory] = useState('')
  const [enterProductImg, setEnterPoductImg] = useState(null)

  const [loading, setLoading] = useState(false)

  const addProduct = async (e) => {
    e.preventDefault()

    const product = {
      title: enterTitle,
      shortDesc: enterShortDesc,
      description: enterDescription,
      price: enterPrice,
      category: enterCategory,
      imgUrl: enterProductImg?.name
    }


    // try {


    //   const docRef = await collection(db, 'product')

    //   const storageRef = ref(storage, `productImage/${Date.now()+ enterProductImg.name}`)
    //   const uploadTask = uploadBytesResumable(storageRef, enterProductImg)

    //   uploadTask.on(()=>{
    //     toast.error('images not uploaded !')
    //   }, ()=>{
    //     getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
    //       await addDoc(docRef,{
    //         title: enterTitle,
    //         shortDesc: enterShortDesc,
    //         description: enterDescription,
    //         price: enterPrice,
    //         category: enterCategory,
    //         imgUrl: downloadURL
    //       })
    //     })
    //     toast.success('Product Successfully added !')
    //   })

    // } catch (error) {
    //   toast.error(error.message)
    // }


    // ============ add product to the firebase database

    try {
      const docRef = await addDoc(collection(db, "products"), product)
      console.log('Product added successfully:', docRef.id)
    } catch (error) {
      console.error('Error adding product:', error)
    }

    toast.success('Product Successfully added !')

    console.log('Product added:', product)







  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <h4 className='mb-5 fs-3'>Add Products</h4>
            <Form onSubmit={addProduct}>
              <FormGroup className='form__group'>
                <span>Product Title</span>
                <input type="text" placeholder='Double sofa' value={enterTitle} onChange={e => setEnterTitle(e.target.value)} required />
              </FormGroup>

              <FormGroup className='form__group'>
                <span>Short Description</span>
                <input type="text" placeholder='lorem....' value={enterShortDesc} onChange={e => setEnterShortDesc(e.target.value)} required />
              </FormGroup>

              <FormGroup className='form__group'>
                <span>Description</span>
                <input type="text" placeholder='Description' value={enterDescription} onChange={e => setEnterDescription(e.target.value)} required />
              </FormGroup>

              <div className='flex items-center justify-between gap-5'>
                <FormGroup className='form__group  w-50'>
                  <span>Price</span>
                  <input type="number" placeholder='$100' value={enterPrice} onChange={e => setEnterPrice(e.target.value)} required />
                </FormGroup>

                <FormGroup className='form__group w-50 '>
                  <span>Category</span>
                  <select className='w-100 p-2 border' value={enterCategory} onChange={e => setEnterCategory(e.target.value)} required>
                    <option value="chair">Chair</option>
                    <option value="sofa">Sofa</option>
                    <option value="mobile">Mobile</option>
                    <option value="Watch">Watch</option>
                    <option value="wireless">Wireless</option>
                  </select>
                </FormGroup>
              </div>

              <div>
                <FormGroup className='form__group'>
                  <span>Product Image</span>
                  <input type="file" onChange={e => setEnterPoductImg(e.target.files[0])} required />
                </FormGroup>
              </div>

              <button className="buy__btn" type='submit'>Add Product</button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AddProducts