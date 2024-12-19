import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { db } from '../firebase.config'
import { doc, deleteDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import useGetData from '../custom-hooks/useGetData'



const AllProducts = () => {

  const { data:productsData, loading } = useGetData('products')

  const deleteProduct = async(id)=>{
    await deleteDoc(doc(db, 'products',id))
    toast.success('Deleted')
  }

  return (
   <section>
    <Container>
      <Row>
        <Col lg='12'>
        <table className='table'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {
              loading ? <h4 className='py-5 font-bold'>Loading.......</h4> 
              : 
              productsData.map((item, index) => (
                <tr key={index}>
                  <td><img src={item.imgUrl} alt="" /></td>
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td>${item.price}</td>
                  <td><button className='btn btn-danger' onClick={()=>{deleteProduct(item.id)}}>Delete</button></td>
                </tr>
              ))
            }

          </tbody>
        </table>
        </Col>
      </Row>
    </Container>
   </section>
  )
}

export default AllProducts