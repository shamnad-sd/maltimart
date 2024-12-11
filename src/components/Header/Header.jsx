import React from 'react'
import './header.css'
import { Container, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/eco-logo.png'
import Usericon from '../../assets/images/user-icon.png'
import { RiHeartLine, RiMenuLine, RiShoppingBagLine } from '@remixicon/react'
import { motion } from 'framer-motion'

const nav__links = [
  {
    path:'home',
    display :'Home'
  },
  {
    path:'shop',
    display :'Shop'
  },
  {
    path:'cart',
    display :'Cart'
  }

]

const Header = () => {
  return (
  <header className="header">
      <Container>
      <Row>
        <div className="nav__wrapper">
          <div className="logo">
             <img src={logo} alt="logo" />
             <div>
              <h1>Multimart</h1>
             </div>
          </div>

          <div className="navigation">
            <ul className="menu">

                {
                  nav__links.map((item,index)=>(
                    <li className='nav__item' key={index}>
                      <NavLink to={item.path} className={(navClass)=>navClass.isActive ? 'nav__active' : ''} >{item.display}</NavLink>
                    </li>
                  ))
                }
              
            </ul>
          </div>

          <div className="nav__icons">
            <span className='fav__icon relative'><RiHeartLine/>
            {/* <span className="badge">1</span> */}
            </span>
            <span className="cart__icon relative"><RiShoppingBagLine/>
            {/* <span className="badge">1</span> */}
            </span>
            <span>
              <motion.img whileTap={{scale : 1.4}} className='cursor-pointer' src={Usericon} alt={Usericon} />
            </span>
          </div>

          <div className="mobile__menu">
              <span><RiMenuLine/></span>
              </div>

        </div>
        </Row>
      </Container>
  </header>
  )
}

export default Header