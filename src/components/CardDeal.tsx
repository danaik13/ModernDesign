import { Container, Button } from 'react-bootstrap';
import { card } from '../assets/images';

const CardDeal = () => (
  <section >
    <Container>
      <div className="d-flex flex-lg-row flex-column">
        <div className="d-flex flex-1 flex-column justify-content-center align-items-start">
          <h2 className="text-white">
            Find a better card deal 
            <br className="d-none d-lg-block" />
            in few easy steps.
          </h2>
          <p>
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <Button>Get Started</Button>
        </div>
        <div className="flex-1 position-relative mt-md-0 mt-4">
          <img src={card} alt="billing" className="position-relative w-100 h-100" />
        </div>
      </div>
    </Container>
  </section>
)


export default CardDeal;