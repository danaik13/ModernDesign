import { Container, Button } from 'react-bootstrap';
import { features } from '../constants';
import { Feature } from '../types';
import FeatureCard from './UI/FeatureCard/FeatureCard';
import { Element } from 'react-scroll';

const Features = () =>  (
  <section>
    <Element name="features">
      <Container>
        <div className="d-flex flex-lg-row flex-column">
          <div className="flex-1">
            <h2>
              You do the business, {" "}
              <br className="d-none d-lg-block" />
              we’ll handle the money.
            </h2>
            <p>
              With the right credit card, you can improve your financial life by
              building credit, earning rewards and saving money. But with hundreds
              of credit cards on the market.
            </p>
            <Button>Get Started</Button>
          </div>
          <div className="flex-1 mt-lg-0 mt-4">
            {features.map((feature: Feature, index: number) => (
              <FeatureCard key={feature.id} {...feature} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </Element>
  </section>
)

export default Features;