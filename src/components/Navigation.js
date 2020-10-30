import { useState } from 'react';
import { HashLink as Link, NavHashLink as NavLink } from 'react-router-hash-link'
import { Col, Collapse, Container, Nav, Navbar, NavbarBrand, NavItem, Row } from 'reactstrap'

const Navigation = () => {

  const [isOpen, setIsOpen] = useState(false)

  const setOpen = () => {
    if(window.innerWidth >= 768) return

    setIsOpen(!isOpen)
  }
  return (<>
    <Navbar
      className="navbar-horizontal navbar-light sticky-top bg-white shadow"
      expand="lg"
    >
      <Container>
        <NavbarBrand to="/#top" smooth tag={Link}>
          <img style={{ height: '50px' }} src={require('../assets/img/logo.png').default} alt="50 Jahre Negertalmusikanten" />
        </NavbarBrand>
        <button
          aria-controls="navbar-primary"
          aria-expanded={false}
          aria-label="Toggle navigation"
          className="navbar-toggler"
          data-target="#navbar-primary"
          data-toggle="collapse"
          id="navbar-primary"
          type="button"
          onClick={setOpen}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <Collapse isOpen={isOpen} navbar toggler="#navbar-primary">
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <img src={require('../assets/img/logo.png').default} alt="50 Jahre Negertalmusikanten" />
              </Col>
              <Col className="collapse-close" xs="6">
                <button
                  aria-controls="navbar-primary"
                  aria-expanded={false}
                  aria-label="Toggle navigation"
                  className="navbar-toggler"
                  data-target="#navbar-primary"
                  data-toggle="collapse"
                  id="navbar-primary"
                  type="button"
                  onClick={setOpen}
                >
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>
          <Nav className="ml-lg-auto" navbar>
            <NavItem>
              <NavLink
                className={'nav-link'}
                smooth
                onClick={setOpen}
                to="#top"
                scroll={el => el.scrollIntoView({
                  block: 'start',
                  behavior: 'smooth'
                })}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={'nav-link'}
                smooth
                onClick={setOpen}
                to="#festjahr"
                scroll={el => el.scrollIntoView({
                  block: 'start',
                  behavior: 'smooth'
                })}
              >
                Festjahr
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={'nav-link'}
                smooth
                onClick={setOpen}
                to="#anmeldung"
                scroll={el => el.scrollIntoView({
                  block: 'start',
                  behavior: 'smooth'
                })}
              >
                Anmeldung
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={'nav-link'}
                smooth
                onClick={setOpen}
                to="#fotos"
                scroll={el => el.scrollIntoView({
                  block: 'start',
                  behavior: 'smooth'
                })}
              >
                Das sind wir
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  </>)
}

export default Navigation
