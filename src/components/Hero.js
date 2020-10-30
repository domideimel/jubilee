import { Container } from 'reactstrap'

function Hero () {
  return (<section className={'section-lg'}>
    <Container className={'d-flex align-items-center justify-content-center mb-4'}>
      <img src={require('../assets/img/hero.jpg').default} alt="50 Jahre Negertalmusikanten" loading="auto" className={'img-fluid'} />
    </Container>
  </section>)
}

export default Hero
