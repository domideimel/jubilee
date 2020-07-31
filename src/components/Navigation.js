import React from 'react'
import { HashLink as Link, NavHashLink as NavLink } from 'react-router-hash-link'
import {
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  Row,
  UncontrolledCollapse,
  UncontrolledDropdown
} from 'reactstrap'

const Navigation = () => {

  return (<>
    <Navbar
      className="navbar-horizontal navbar-light sticky-top bg-white shadow"
      expand="lg"
    >
      <Container>
        <NavbarBrand to="/#top" smooth tag={Link}>
          <img style={{ height: '50px' }} src={require('../assets/img/logo.png')} alt="50 Jahre Negertalmusikanten" />
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
        >
          <span className="navbar-toggler-icon" />
        </button>
        <UncontrolledCollapse navbar toggler="#navbar-primary">
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <img src={require('../assets/img/logo.png')} alt="50 Jahre Negertalmusikanten" />
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
                to="#chronik"
                scroll={el => el.scrollIntoView({
                  block: 'start',
                  behavior: 'smooth'
                })}
              >
                Chronik
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={'nav-link'}
                smooth
                to="#anmeldung"
                scroll={el => el.scrollIntoView({
                  block: 'start',
                  behavior: 'smooth'
                })}
              >
                Anmeldung
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav>
              <DropdownMenu
                aria-labelledby="navbar-primary_dropdown_1"
                right
              >
                <DropdownItem
                  to="#festjahr"
                >
                  Festjahr
                </DropdownItem>
                <DropdownItem
                  to="#chronik"
                >
                  Chronik
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem
                  to="#anmeldung"
                >
                  Anmeldung
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </UncontrolledCollapse>
      </Container>
    </Navbar>
  </>)
}

export default Navigation
