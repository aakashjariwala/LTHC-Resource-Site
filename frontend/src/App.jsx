import { useState } from 'react'
import { Link } from 'react-scroll'
import Button from './components/Button'

function App() {
  const onButtonClick = () => {}
  return (
    <>
      <Button onClick={onButtonClick}>
        {' '}
        <Link activeClass="active" to="about" spy smooth>
          About{' '}
        </Link>{' '}
      </Button>
      <Button onClick={onButtonClick}>
        {' '}
        <Link activeClass="active" to="contact" spy smooth>
          Contact{' '}
        </Link>{' '}
      </Button>
      <Button onClick={onButtonClick}>
        {' '}
        <Link activeClass="active" to="service" spy smooth>
          Service{' '}
        </Link>{' '}
      </Button>
      <div id="home" style={{ height: 500 }}>
        <h1>This is Home section</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
        repellendus. Totam nihil similique a repellat minus dolor amet quasi.
        Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
      </div>
      <div id="about" style={{ height: 500 }}>
        <h1>This is About section</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
        repellendus. Totam nihil similique a repellat minus dolor amet quasi.
        Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
      </div>
      <div id="contact" style={{ height: 500 }}>
        <h1>This is Contact section</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
        repellendus. Totam nihil similique a repellat minus dolor amet quasi.
        Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
      </div>
      <div id="service" style={{ height: 500 }}>
        <h1>
          {' '}
          <Link activeClass="active" to="service" spy smooth>
            This is Service section{' '}
          </Link>{' '}
        </h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
        repellendus. Totam nihil similique a repellat minus dolor amet quasi.
        Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        <Button onClick={onButtonClick}>
          {' '}
          <Link activeClass="active" to="home" spy smooth>
            Home{' '}
          </Link>{' '}
        </Button>
      </div>
    </>
  )
}

export default App
