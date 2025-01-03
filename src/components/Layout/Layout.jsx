import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../routers/Routers'
import { useLocation } from 'react-router-dom'
import AdminNav from '../../Admin/AdminNav'

const Layout = () => {

  const location = useLocation()

  return (
    <div>

      {
        location.pathname.startsWith('/dashboard') ? <AdminNav/> : <Header/>
      } 
        <div>
            <Routers/>
        </div>
        <Footer/>
    </div>
  )
}

export default Layout