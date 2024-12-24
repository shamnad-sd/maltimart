import React, { useState } from 'react'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import { Col, Container, Row } from 'reactstrap'
import '../Styles/shop.css'

import products from '../assets/data/products'
import ProductList from '../components/UI/ProductList'
import { h1 } from 'framer-motion/client'


const Shop = () => {
  const [productsData, setProductsData] = useState(products)


  const handleFilter = (e) => {
    const filterValue = e.target.value
    if(filterValue === 'sofa'){
      const filteredProducts = products.filter(item => item.category === 'sofa')

      setProductsData(filteredProducts)
    }

    if(filterValue === 'mobile'){
      const filteredProducts = products.filter(item => item.category === 'mobile')

      setProductsData(filteredProducts)
    }

    if(filterValue === 'watch'){
      const filteredProducts = products.filter(item => item.category === 'watch')

      setProductsData(filteredProducts)
    }

    if(filterValue === 'wireless'){
      const filteredProducts = products.filter(item => item.category === 'wireless')

      setProductsData(filteredProducts)
    }
    if(filterValue === 'chair'){
      const filteredProducts = products.filter(item => item.category === 'chair')

      setProductsData(filteredProducts)
    }

  }

  const handleSearch = (e) =>{
    const searchTerm = e.target.value

    const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

    setProductsData(searchedProducts)

  }

  return (
  <Helmet title='Shop'>

    <CommonSection title='Products'/>

    <section>
      <Container>
        <Row>
          <Col lg='3' md='3'>
           <div className="filter__widget">
            <select onChange={handleFilter}>
              <option>Category</option>
              <option value="chair">chair</option>
              <option value="sofa">sofa</option>
              <option value="watch">watch</option>
              <option value="wireless">wireless</option>
              <option value="mobile">mobile</option>
            </select>
           </div>
          </Col>


          <Col lg='3' md='3'>
          <div className="filter__widget">
            <select>
              <option>Sort By</option>
              <option value="ascending">Acending</option>
              <option value="descending">Descending</option>
            </select>
           </div>
          </Col>

          <Col lg='6' md='6'>
          <div className="search__box">
            <input type="text" placeholder='Search........' onChange={handleSearch} />
            <span><i className="ri-search-line"></i></span>
          </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className='pt-0'>
      <Container>
        <Row>
          {
            productsData.length === 0 ? <h1 className='text-center fs-4'>No Products Are Found !</h1>
            : <ProductList data={productsData}/>
          }
        </Row>
      </Container>
    </section>
  </Helmet>
  
  
  
)}

export default Shop