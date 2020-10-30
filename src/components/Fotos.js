import { Col, Container, Row } from 'reactstrap'

const Fotos = () => {
  return (<section id={'fotos'} className={'section-lg bg-danger'}>
    <Container>
      <Row>
        <Col className={'d-flex justify-content-center'}>
          <img src={require('../assets/img/negertalmusikanten-weste.jpg').default} alt="50 Jahre Negertalmusikanten" loading="lazy" className={'img-fluid m-auto'} />
        </Col>
      </Row>
    </Container>
  </section>)
}

export default Fotos
