import { Container } from 'react-bootstrap';
import { robot }  from '../assets/images';
import { discount }  from '../assets/icons';
import GetStarted from './UI/GetStarted/GetStarted';
import { Element } from 'react-scroll';

const Banner = () => (
  <section className="mt-lg-5 mt-4">
    <Element name="home">
      <Container>
        <div className="d-flex justify-content-center align-items-center flex-lg-row flex-column">     
          <div className="d-flex flex-1 flex-column justify-content-center align-items-start w-100">
            <div className="d-flex flex-row rounded py-2 ps-2 pe-3 mb-2 align-items-center discount-gradient">
              <img src={discount} alt="discount" width="32" height="32" />
              <p className={`mb-0 ms-1`}>
                <span className="text-white">20%</span> Discount For {" "}
                <span className="text-white">1 Month</span> Account
              </p>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center w-100">
              <h1 className="text-white mb-0">
                The Next <br className="" />{" "}
                <span className="text-gradient">Generation</span>
              </h1>
              <div className="d-none d-md-block ">
                <GetStarted />
              </div>
            </div>
            <h1>
              Payment Method.
            </h1>
            <p>
              Our team of experts uses a methodology to identify the credit cards
              most likely to fit your needs. We examine annual percentage rates,
              annual fees.
            </p>
          </div>
          <div className="d-flex flex-1 position-relative my-0 ">
            <img src={robot} alt="billing" className="position-relative w-100 h-100 px-0" />

            <div className="position-absolute w-40 h-35 pink_gradient" />
            <div className="position-absolute w-80 h-80 rounded-circle white_gradient" />
            <div className="position-absolute w-50 h-50 blue_gradient" />
          </div>
          <div className="d-md-none">
            <GetStarted />
          </div>
        </div>
      </Container>
    </Element>
  </section>
)

export default Banner;