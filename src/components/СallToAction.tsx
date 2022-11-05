import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const СallToAction = () => (
  <section>
    <Container>
    <div className="d-flex flex-md-row flex-column justify-content-between text-reverce-black-gradient rounded p-md-5 p-4">
      <div className="flex-1">
        <h2>
          Let’s try our service now!
        </h2>
        <p className="mb-md-0">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <Button>Get Started</Button>
      </div>
    </div>
    </Container>
  </section>
)

export default СallToAction;