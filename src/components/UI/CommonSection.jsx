import React from 'react'
import { Col, Container, Row } from 'reactstrap'

import '../../Styles/common-section.css'

const CommonSection = ({title}) => {
  return (
    <section className="common__section">
        <Container className='text-center'>
            <h1 className='uppercase'>{title}</h1>
        </Container>
    </section>
  )
}

export default CommonSection