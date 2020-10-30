import { Col, Container, Row } from 'reactstrap'
import TimeLine from './TimeLine'

const Chronik = () => {
  const conductor = [{
    'title': 'Herr Eilinghoff',
    'subtitle': '1972 - 1973',
    'content': 'Herr Eilinghoff aus Brunskappel, Mitglied im Kurorchester Olsberg'
  }, {
    'title': 'Herr Alfred Klaus',
    'subtitle': '1973 - 1977',
    'content': 'Herr Alfred Klaus, pensionierter Berufsmusiker'
  }, {
    'title': 'Herr Thüsing',
    'subtitle': '1977',
    'content': 'vorübergehend Herr Thüsing aus Züschen, Ausbilder der Kreisjugendmusikschule anschließend übergangsweise die Herren Kramer aus Ostwig und Körner aus Geseke'
  }, {
    'title': 'Herr Christoph Hanfland',
    'subtitle': '1978 - 1998',
    'content': 'Herr Christoph Hanfland, aktives Mitglied seit 1971'
  }, {
    'title': 'Herr Martin Hövelmann',
    'subtitle': '1998 - 2001',
    'content': 'Herr Martin Hövelmann, stellvertr. Kreismusikdirigent'
  }, {
    'title': 'Herr Christoph Hanfland',
    'subtitle': '2002 - 2003',
    'content': ''
  }, {
    'title': 'Herr Christian Schulte',
    'subtitle': '2003 - 2009',
    'content': 'Herr Christian Schulte aus Wenholthausen'
  }, {
    'title': 'Herr Andreas Hoffmann',
    'subtitle': '2010 - 2014',
    'content': ''
  }, {
    'title': 'Herr André Stoll / Herr Clemens Vorsmann',
    'subtitle': '2015 -',
    'content': 'Herr André Stoll / Herr Clemens Vorsmann (seit Juli 2017)'
  }]

  return (<section id={'chronik'} className={'section-lg'}>
    <Container>
      <Row>
        <Col>
          <h2 className={'display-3'}>
            Aus unserer Chronik
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Einem alten Wunsch der Bevölkerung und besonders der Katholischen Kirchengemeinde entsprechend wurde im
            Jahre 1971 zum wiederholten Male der Versuch unternommen, in Siedlinghausen wieder ein Blasorchester zu
            gründen. Da man nicht auf einen alten Spielerstamm zurückgreifen konnte - das letzte Blasorchester hatte
            sich 1935 aufgelöst - blieb nur die Möglichkeit, mit Jugendlichen einen völlig neuen Anfang zu machen. Mit
            wenigen Instrumenten, die Pastor Ludwig noch seit dem letzten Versuch auf Lager hatte, mit viel Optimismus
            und tatkräftiger, d. h. finanzieller und ideeller Unterstützung durch Pastor Ludwig, Anton Leiße, Ernst
            Steinrücke und in besonderem Maße Georg Pieper und der Gemeindevertretung unter Bürgermeister Caspari begann
            Rektor Franz Mickus mit dieser schwierigen Aufgabe. In einem Kellerraum der Grundschule wurden die ersten
            Proben durchgeführt.
          </p>
          <p>
            Spieler der ersten Stunde waren Rainer Hamann, Christoph Hanfland, Karl-Josef Hanfland, Hubertus Kräling,
            Severin Lörwald, Karl-Udo Lütteken, Peter Mähler, Hubertus Plebs, Meinolf Rohleder, Reinhard Rohleder,
            Thomas Rohleder und Bruno Stabaginski. Diese Gruppe hatte ihren ersten Auftritt beim Martinszug 1971, wobei
            allerdings Lautstärke und Harmonie noch in einem ungesunden Verhältnis standen.
          </p>
          <p>
            Es stellte sich aber bald heraus, dass man auf die Hilfe erfahrener Musiker nicht verzichten konnte, wollte
            man die Gruppe von Einzelspielern zu einem Orchester formen. Als Ausbilder und Dirigenten halfen in den
            folgenden Jahren:
          </p>
          <TimeLine items={conductor} />
          <p>
            Wegen der ständig wachsenden Aufgaben wurde ebenfalls die Gründung eines Musikvereins erforderlich. Hier
            muss die Unterstützung durch den Schützenverein, insbesondere durch die Herren des Vorstandes, Herr Edmund
            Kräling, Ludwig Schauerte und Josef Hagenhoff erwähnt werden. Spontan kam es nach einem Auftritt zu einer
            Vereinsgründung mit zunächst folgenden Mitgliedern:
          </p>
          <p>
            Ewald Ludwig, Edmund Kräling, Karl Pieper, Josef Hagenhoff, Ulrich Brings, Frau Hamann, Johannes Brockmann,
            Reinhard Leiße, Walter Wienand, Richard Hassenpflug, Hans Dickmann, Günter Rohleder, Josef Mähler, Johannes
            Plebs, Walter Rohleder, Richard Scholz, Hubert Kräling, Karl Brockmann, Anton Teutenberg, Ludwig Schauerte,
            Klaus Simon, Rolf Körner, Dr. Reinhardt und Bernhard Lütteken
          </p>
          <p>
            In einer Versammlung am 07.02.1974 wurde Frau Christa Hanfland zur ersten Vorsitzenden dieses Musikvereins
            gewählt. Sie sorgte mit viel Eigeninitiative für die ersten Uniformen, blaue Kasacks, die auch beim
            10-jährigen Jubiläum im Jahr 1981 wieder getragen wurden. In den folgenden Jahren wuchs die Mitgliederzahl
            des Musikvereins ständig. Ende 1978 beschloss die Generalversammlung eine neue Satzung und die Eintragung in
            das Vereinsregister. Neuer Vorsitzender des Musikvereins wurde Josef Hagenhoff. Ihm zur Seite standen Werner
            Brockmann, Walter Ritter, Kurt Herrmann, Birgit Hanfland, Reinhard Rohleder und Franz Mickus.
          </p>
          <p>
            Unter der Stabführung von Christoph Hanfland entwickelte sich das Orchester zu einem beachtlichen
            Klangkörper, der aus dem Dorf- und Vereinsleben nicht mehr wegzudenken ist. Schwierig für den Dirigenten und
            den Verein ist, dass viele Jugendliche Spieler nach der Schul- oder Berufsausbildung den Ort verlassen und
            dem Orchester nicht mehr zur Verfügung stehen. So wurden allein bis zum 25- jährigen Jubiläum schon über 100
            Spieler ausgebildet.
          </p>
        </Col>
      </Row>
    </Container>
  </section>)
}

export default Chronik
