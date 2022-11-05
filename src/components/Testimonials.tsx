import { Container } from 'react-bootstrap';

const Testimonials = () => (
  <section>
    <Container>
      <div className="d-flex justify-content-between align-items-center flex-lg-row flex-column">
        <h2 className="w-100">
          What People are {" "}
          <br className="d-none d-lg-block" />
          saying about us
        </h2>
        <div className="w-100">
          <p>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
    </Container>
  </section>
)


export default Testimonials;