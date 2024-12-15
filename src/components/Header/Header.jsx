import React, { useEffect, useRef } from 'react'
import './header.css'
import { Container, Row } from 'reactstrap'
import { Link, NavLink,useNavigate } from 'react-router-dom'
import logo from '../../assets/images/eco-logo.png'
import Usericon from '../../assets/images/user-icon.png'
import { RiHeartLine, RiMenuLine, RiShoppingBagLine } from '@remixicon/react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import useAuth from '../../custom-hooks/useAuth'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase.config'
import { toast } from 'react-toastify'

const nav__links = [
  {
    path: 'home',
    display: 'Home'
  },
  {
    path: 'shop',
    display: 'Shop'
  },
  {
    path: 'cart',
    display: 'Cart'
  }

]

const Header = () => {

  const headerRef = useRef(null)
  const totalQuantity =useSelector(state => state.cart.totalQuantity)
  const profileActionRef = useRef(null)

  const menuRef = useRef(null)
  const navigate = useNavigate()
  const {currentUser} = useAuth()

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header')
      } else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  const logout =()=>{
    signOut(auth)
    .then(()=>{
      toast.success('Logged out')
      navigate("/home")
    }).catch(err=>{
      toast.error(err.message)
    })
  }

  useEffect(() => {
    stickyHeaderFunc()
    return () => {
      window.removeEventListener('scroll', stickyHeaderFunc)
    }
  })

  const toggleMenu = () => {
    menuRef.current.classList.toggle('active__menu')
  }

  const navigateToCart = () =>{
    navigate('/cart')
  }

  const toggleProfileActions = () => profileActionRef.current.classList.toggle('show__profileAction')


  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <Link to="/home"><h1>Multimart</h1></Link>
              </div>
            </div>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu">

                {
                  nav__links.map((item, index) => (
                    <li className='nav__item' key={index}>
                      <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav__active' : ''} >{item.display}</NavLink>
                    </li>
                  ))
                }

              </ul>
            </div>

            <div className="nav__icons">
              <span className='fav__icon relative'><RiHeartLine />
                <span className="badge">2</span>
              </span>
              <span className="cart__icon relative" onClick={navigateToCart}><RiShoppingBagLine />
                <span className="badge">{totalQuantity}</span>
              </span>
              <div className='profile'>
                <motion.img 
                whileTap={{ scale: 1.4 }} 
                className='cursor-pointer' 
                src={Usericon} 
                alt='' 
                onClick={toggleProfileActions}
                />

                <div className="profile__action" ref={profileActionRef} onClick={toggleProfileActions}>
                  {
                    currentUser ? <span onClick={logout}>Logout</span> :
                     <div className='flex items-center justify-center flex-col'>
                      <Link to='/signup'>Signup</Link>
                      <Link to='/login'>Login</Link>
                    </div>
                  }
                </div>
              </div>
              <div className="mobile__menu">
              <span onClick={toggleMenu}><RiMenuLine /></span>
            </div>
            </div>
            

          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header