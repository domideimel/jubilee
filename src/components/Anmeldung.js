import React, { useState } from 'react'
import { Button, Col, Container, Form, FormGroup, Input, Row } from 'reactstrap'

const Anmeldung = () => {
  const [name, setName] = useState('')
  const [surName, setSurName] = useState('')
  const [street, setStreet] = useState('')
  const [town, setTown] = useState('')
  const [email, setEmail] = useState('')
  const [concert, setConcert] = useState('')
  const [party, setParty] = useState('')
  const [morning, setMorning] = useState('')
  const [text, setText] = useState('')

  const formData = {
    name,
    surName,
    street,
    town,
    email,
    concert,
    party,
    morning,
    text
  }

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const onSubmit = e => {
    e.preventDefault()
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formData })
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error))

  }

  return (<section id={'anmeldung'} className={'section-lg bg-danger text-white'}>
    <Container>
      <Row>
        <Col>

          <h2 className={'display-3 text-white'}>Anmeldung</h2>
          <Form
            onSubmit={onSubmit}
            data-netlify="true"
            form-name='contact'
            netlify-honeypot="bot-field"
            name={'contact'}
          >
            <input type="hidden" name="form-name" value="contact" />
            <FormGroup>
              <Input
                className="form-control-alternative"
                placeholder="Name"
                name='name'
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Input
                className="form-control-alternative"
                placeholder="Nachname"
                name='nachname'
                type="text"
                value={surName}
                onChange={e => setSurName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Input
                className="form-control-alternative"
                placeholder="Straße"
                name='straße'
                type="text"
                value={street}
                onChange={e => setStreet(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Input
                className="form-control-alternative"
                placeholder="Postleitzahl / Ort"
                name='town'
                type="text"
                value={town}
                onChange={e => setTown(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Input
                className="form-control-alternative"
                placeholder="name@example.com"
                type="email"
                name='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </FormGroup>

            <hr className={'bg-white'} />
            <h3 className='display-4 text-white'>Anwesenheit</h3>
            <Row>
              <Col>
                <h5 className='display-5 text-white'>31.01.2021 Jubiläumskonzert</h5>
                <div className="custom-control custom-radio mb-3">
                  <input
                    className="custom-control-input"
                    id="customCheck1"
                    type="radio"
                    name='jubiläumskonzert'
                    onChange={e => setConcert('Konzert: Ja')}
                  />
                  <label className="custom-control-label" htmlFor="customCheck1">
                    Ja
                  </label>
                </div>
                <div className="custom-control custom-radio mb-3">
                  <input
                    className="custom-control-input"
                    id="customCheck2"
                    type="radio"
                    name='jubiläumskonzert'
                    onChange={e => setConcert('Konzert: Ja mit Partner')}
                  />
                  <label className="custom-control-label" htmlFor="customCheck2">
                    Ja mit Partner
                  </label>
                </div>
                <div className="custom-control custom-radio mb-3">
                  <input
                    className="custom-control-input"
                    id="customCheck3"
                    type="radio"
                    name='jubiläumskonzert'
                    onChange={e => setConcert('Konzert: Nein')}
                  />
                  <label className="custom-control-label" htmlFor="customCheck3">
                    Nein
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <h5 className='display-5 text-white'>30.10.2021 Festveranstaltung</h5>
                <div className="custom-control custom-radio mb-3">
                  <input
                    className="custom-control-input"
                    id="customCheck4"
                    type="radio"
                    name='festveranstaltung'
                    onChange={e => setParty('Festveranstaltung: Ja')}
                  />
                  <label className="custom-control-label" htmlFor="customCheck4">
                    Ja
                  </label>
                </div>
                <div className="custom-control custom-radio mb-3">
                  <input
                    className="custom-control-input"
                    id="customCheck5"
                    type="radio"
                    name='festveranstaltung'
                    onChange={e => setParty('Festveranstaltung: Ja mit Partner')}
                  />
                  <label className="custom-control-label" htmlFor="customCheck5">
                    Ja mit Partner
                  </label>
                </div>
                <div className="custom-control custom-radio mb-3">
                  <input
                    className="custom-control-input"
                    id="customCheck6"
                    type="radio"
                    name='festveranstaltung'
                    onChange={e => setParty('Festveranstaltung: Nein')}
                  />
                  <label className="custom-control-label" htmlFor="customCheck6">
                    Nein
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <h5 className='display-5 text-white'>31.10.2021 Frühschoppenkonzert anschl. gemütliches
                  Beisammensein</h5>
                <div className="custom-control custom-radio mb-3">
                  <input
                    className="custom-control-input"
                    id="customCheck7"
                    type="radio"
                    name='frühschoppenkonzert'
                    onChange={e => setMorning('Frühschoppenkonzert: Ja')}
                  />
                  <label className="custom-control-label" htmlFor="customCheck7">
                    Ja
                  </label>
                </div>
                <div className="custom-control custom-radio mb-3">
                  <input
                    className="custom-control-input"
                    id="customCheck8"
                    type="radio"
                    name='frühschoppenkonzert'
                    onChange={e => setMorning('Frühschoppenkonzert: Ja mit Partner')}
                  />
                  <label className="custom-control-label" htmlFor="customCheck8">
                    Ja mit Partner
                  </label>
                </div>
                <div className="custom-control custom-radio mb-3">
                  <input
                    className="custom-control-input"
                    id="customCheck9"
                    type="radio"
                    name='frühschoppenkonzert'
                    onChange={e => setMorning('Frühschoppenkonzert: Nein')}
                  />
                  <label className="custom-control-label" htmlFor="customCheck9">
                    Nein
                  </label>
                </div>
              </Col>
            </Row>
            <hr className={'bg-white'} />
            <p>
              Beim Frühschoppenkonzert am 31.10.2021 möchte das Orchester gerne gemeinsam mit den ehemaligen
              Musikerinnen und Musikern 2–3 Musikstücke aus der Vergangenheit aufführen.
            </p>
            <p>
              Hast Du Lust mitzuspielen und noch ein eigenes Instrument?<br />
              Welches Instrument spielst Du?<br />
              Noten stellen wir Dir zur Verfügung.
            </p>
            <p>
              Wir freuen uns auf einen gemeinsamen Auftritt!
            </p>

            <Input
              className="form-control-alternative"
              placeholder="Schreib uns etwas..."
              rows="3"
              type="textarea"
              name='text'
              value={text}
              onChange={e => setText(e.target.value)}
            />
            <Button
              type='submit'
              className='mt-5'
            >
              Anmelden
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  </section>)
}

export default Anmeldung
