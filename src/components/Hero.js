import React from 'react'
import { Container } from 'reactstrap'

function Hero () {
  return (<section className={'section-lg'}>
    <Container className={'d-flex align-items-center justify-content-center mb-4'}>
      <img src={require('../assets/img/hero.jpg')} alt="50 Jahre Negertalmusikanten" className={'img-fluid'} />
    </Container>
  </section>)
}

export default Hero
