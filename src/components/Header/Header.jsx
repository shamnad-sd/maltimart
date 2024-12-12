import React, { useEffect, useRef } from 'react'
import './header.css'
import { Container, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/eco-logo.png'
import Usericon from '../../assets/images/user-icon.png'
import { RiHeartLine, RiMenuLine, RiShoppingBagLine } from '@remixicon/react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'

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

  const menuRef = useRef(null)

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header')
      } else {
        headerRef.current.classList.remove('sticky__header')
      }
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


  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Multimart</h1>
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
              <span className="cart__icon relative"><RiShoppingBagLine />
                <span className="badge">{totalQuantity}</span>
              </span>
              <span>
                <motion.img whileTap={{ scale: 1.4 }} className='cursor-pointer' src={Usericon} alt={Usericon} />
              </span>
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