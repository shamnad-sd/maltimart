import React, { useState } from 'react';
import { Col, Container, Form, FormGroup, Row } from 'reactstrap';
import { toast } from 'react-toastify';
import { db } from '../firebase.config';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const AddProducts = () => {
  const [enterTitle, setEnterTitle] = useState('');
  const [enterShortDesc, setEnterShortDesc] = useState('');
  const [enterDescription, setEnterDescription] = useState('');
  const [enterPrice, setEnterPrice] = useState('');
  const [enterCategory, setEnterCategory] = useState('');
  const [enterProductImgUrl, setEnterProductImgUrl] = useState('');

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const addProduct = async (e) => {
    e.preventDefault();

    setLoading(true)


    const product = {
      productName: enterTitle,
      shortDesc: enterShortDesc,
      description: enterDescription,
      price: enterPrice,
      category: enterCategory,
      imgUrl: enterProductImgUrl // Use the image URL here
    };

    try {
      const docRef = await addDoc(collection(db, "products"), product);
      // console.log('Product added successfully:', docRef.id);
      setLoading(false)
      toast.success('Product Successfully added !');
      navigate('/dashboard/all-products');
    } catch (error) {
      setLoading(false)
      toast.error(error.message);
    }

    console.log('Product added:', product);
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>

            {
              loading ? <h4 className='text-center py-5 font-bold' >Loading......</h4> 
              : 
              <>
                <h4 className='mb-5 fs-3'>Add Products</h4>
                <Form onSubmit={addProduct}>
                  <FormGroup className='form__group'>
                    <span>Product Title</span>
                    <input type="text" placeholder='Title....' value={enterTitle} onChange={e => setEnterTitle(e.target.value)} required />
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
                        <option value="">Select Category</option>
                        <option value="chair">Chair</option>
                        <option value="sofa">Sofa</option>
                        <option value="stools">Stools</option>
                        <option value="lighting">Lighting</option>
                        <option value="tables">Tables</option>
                      </select>
                    </FormGroup>
                  </div>

                  <FormGroup className='form__group'>
                    <span>Product Image URL</span>
                    <input type="text" placeholder='Paste image URL here' value={enterProductImgUrl} onChange={e => setEnterProductImgUrl(e.target.value)} required />
                  </FormGroup>

                  {/* Display the image preview if the URL is valid */}
                  {enterProductImgUrl && (
                    <div className="image-preview">
                      <img src={enterProductImgUrl} alt="Product Preview" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                    </div>
                  )}

                  <button className="buy__btn" type='submit'>Add Product</button>
                </Form>
              </>
            }
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddProducts;