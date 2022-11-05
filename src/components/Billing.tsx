import { Container } from 'react-bootstrap';
import { apple, google } from '../assets/icons';
import { bill } from '../assets/images';
import { Element } from 'react-scroll';

const Billing = () => (
  <section>
    <Element name="product">
      <Container>
        <div className="d-flex flex-lg-row flex-column-reverse">
          <div className="flex-1 position-relative mt-md-0 mt-5">
            <img src={bill} alt="billing" className="position-relative w-100 h-100" />
            
            <div className="position-absolute w-50 h-50 rounded-circle white_gradient" />
            <div className="position-absolute w-50 h-50 rounded-circle pink_gradient" />
          </div>
          <div className="d-flex flex-1 flex-column justify-content-center align-items-start">
            <h2>
              Easily control your {" "}
              <br className="d-none d-lg-block" />
              billing & invoicing
            </h2>
            <p>
              Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
              aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
              placerat.
            </p>
            <div>
              <img src={apple} alt="google_play" className="me-4"/>
              <img src={google} alt="google_play" />
            </div>
          </div>
        </div>
      </Container>
    </Element>
  </section>
)

export default Billing;