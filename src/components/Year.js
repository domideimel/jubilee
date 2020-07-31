import React from 'react'
import { Col, Container, Row, Table } from 'reactstrap'

function Year () {
  return (<section className={'section-lg bg-danger text-white'}>
    <Container id={'festjahr'}>
      <Row>
        <Col>
          <h1 className="display-3 text-white">
            Willkommen zum 50. Jährigen Jubiläum
            <span> Wir haben ein spannendes Jahr für euch geplant</span>
          </h1>
          <p className="lead text-white">
            Der Musikverein, Negertalmusikanten e. V. Siedlinghausen wurde 1971 gegründet und besteht zur Zeit aus 40
            aktiven Musiker, ca. 15 Musiker befinden sich in der musikalischen Ausbildung
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table className={'text-white mt-4 table-responsive'}>
            <tbody>
            <tr>
              <td>31.01.2021</td>
              <td>Jubiläumskonzert</td>
              <td>@ Schützenhalle Siedlinghausen</td>
            </tr>
            <tr>
              <td>30.10.2021</td>
              <td>Großer Festabend</td>
              <td>@ Schützenhalle Siedlinghausen</td>
            </tr>
            <tr>
              <td>31.10.2021</td>
              <td>Frühshoppenkonzert</td>
              <td>@ Schützenhalle Siedlinghausen</td>
            </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  </section>)
}

export default Year
