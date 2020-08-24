import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const Fotos = () => {
  return (<section id={'fotos'} className={'section-lg bg-danger'}>
    <Container>
      <Row>
        <Col lg={6}>
          <img src={require('../assets/img/negertalmusikanten-weste.jpg')} alt="50 Jahre Negertalmusikanten" loading="lazy" className={'img-fluid'} />
        </Col>
        <Col lg={6}>
          <img src={require('../assets/img/negertalmusikanten-vorstand.jpg')} alt="50 Jahre Negertalmusikanten" loading="lazy" className={'img-fluid mt-5 mt-lg-0'} />
        </Col>
      </Row>
    </Container>
  </section>)
}

export default Fotos
